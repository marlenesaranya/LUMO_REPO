/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Upload, X } from 'lucide-react';

interface EditableImageProps {
  id: string;
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function EditableImage({ id, src: defaultSrc, alt, className = "", aspectRatio = "aspect-square" }: EditableImageProps) {
  const [currentSrc, setCurrentSrc] = useState(defaultSrc);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`lumo_img_${id}`);
    if (saved) setCurrentSrc(saved);
  }, [id]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setCurrentSrc(base64String);
        try {
          localStorage.setItem(`lumo_img_${id}`, base64String);
        } catch (err) {
          console.warn("Image too large for localStorage, will exist in-session only.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSrc(defaultSrc);
    localStorage.removeItem(`lumo_img_${id}`);
  };

  return (
    <div 
      className={`relative group overflow-hidden ${aspectRatio} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={currentSrc}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Upload Overlay */}
      <div className={`absolute inset-0 bg-brand-chocolate/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="pointer-events-auto bg-brand-cream text-brand-chocolate p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
          title="Upload new image"
        >
          <Upload size={20} />
        </button>
        <p className="text-brand-cream text-[10px] font-bold uppercase tracking-widest bg-brand-chocolate/40 px-2 py-1">
          Click to replace
        </p>
        
        {currentSrc !== defaultSrc && (
          <button 
            onClick={resetImage}
            className="pointer-events-auto absolute top-4 right-4 bg-red-500/80 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
            title="Reset to default"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleUpload} 
        className="hidden" 
        accept="image/*"
      />
    </div>
  );
}
