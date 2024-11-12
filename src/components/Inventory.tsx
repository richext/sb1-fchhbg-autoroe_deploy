import React, { useEffect, useState } from 'react';
import { shopifyClient } from '../utils/shopify';
import { gql } from '@apollo/client';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
        altText: string;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

const Inventory: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await shopifyClient.query({
          query: gql`
            query Products {
              products(first: 10) {
                edges {
                  node {
                    id
                    title
                    description
                    priceRange {
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    images(first: 1) {
                      edges {
                        node {
                          url
                          altText
                        }
                      }
                    }
                    variants(first: 1) {
                      edges {
                        node {
                          id
                          price {
                            amount
                            currencyCode
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        });

        const formattedProducts = result.data.products.edges.map(
          ({ node }: { node: Product }) => node
        );
        setProducts(formattedProducts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load inventory. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = async (variantId: string) => {
    try {
      const checkoutUrl = `https://${import.meta.env.VITE_SHOPIFY_STORE_URL}/cart/${variantId}:1`;
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error('Error creating checkout:', err);
      setError('Failed to process purchase. Please try again later.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="card-neumorph p-6 rounded-lg">
          <p className="text-primary animate-pulse">Loading inventory...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="card-neumorph p-6 rounded-lg">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section id="inventory" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Vehicles</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our curated selection of premium JDM vehicles ready for import.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-neumorph rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm">
                {product.images.edges[0] && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={product.images.edges[0].node.url}
                      alt={product.images.edges[0].node.altText || product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {new Intl.NumberFormat('en-AU', {
                        style: 'currency',
                        currency: product.priceRange.minVariantPrice.currencyCode,
                      }).format(Number(product.priceRange.minVariantPrice.amount))}
                    </span>
                    
                    <button
                      onClick={() => handleBuyNow(product.variants.edges[0].node.id)}
                      className="btn-neumorph group px-6 py-3 bg-primary/10"
                    >
                      <span className="relative z-10 font-display tracking-wider text-sm flex items-center justify-center gap-2">
                        BUY NOW
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;