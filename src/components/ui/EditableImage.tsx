/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface EditableImageProps {
  id: string;
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function EditableImage({ src, alt, className = "", aspectRatio = "aspect-square" }: EditableImageProps) {
  return (
    <div className={`relative group overflow-hidden ${aspectRatio} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
}
