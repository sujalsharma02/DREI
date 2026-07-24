import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, CoinsIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Property } from '../../utils/types';
import { Button } from './Button';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const progressPercentage = (property.tokensSold / property.totalTokens) * 100;
  const soldOut = property.status === 'Sold Out';

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/property/${property.id}`}>
        <div className="relative">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {soldOut && isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="text-indigo-200 font-medium text-lg">Sold Out</span>
            </motion.div>
          )}
        </div>

        <div className="p-5 pb-4">
          <h3 className="text-xl font-semibold text-white mb-3 line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-400 mb-4">
            <MapPinIcon size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm truncate">{property.location}</span>
          </div>
          <div className="flex items-center mb-4 text-sm">
            <div className="flex items-center text-gray-400 mr-4">
              <UsersIcon size={16} className="mr-1.5" />
              <span>{property.tokensSold} tokens sold</span>
            </div>
            <div className="flex items-center text-gray-400">
              <TrendingUpIcon size={16} className="mr-1.5" />
              <span>{property.returnRate}% APY</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-gray-400">Token Sale Progress</span>
              <span className="text-white font-medium">
                {progressPercentage.toFixed(0)}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-indigo-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </Link>

      <div className="px-5 pb-5">
        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
          <div>
            <span className="text-lg font-semibold text-white">
              ${property.price.toLocaleString()}
            </span>
            <div className="flex items-center text-gray-400 text-xs mt-0.5">
              <CoinsIcon size={12} className="text-indigo-400 mr-1" />
              <span>{property.tokenPrice} ETH / token</span>
            </div>
          </div>
          <Button
            size="sm"
            disabled={soldOut}
            onClick={() => navigate(`/property/${property.id}`)}
          >
            Invest Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
