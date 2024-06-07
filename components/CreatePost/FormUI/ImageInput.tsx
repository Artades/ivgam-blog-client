import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BsImage, BsTrash } from 'react-icons/bs';

interface ImageInputProps {
  onImageChange: (file: File) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ onImageChange }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        // Вызов функции onImageChange для передачи выбранного файла
        onImageChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setImageSrc(null);
    if (hiddenFileInput.current) {
      hiddenFileInput.current.value = '';
    }
  };

  return (
    <div>
      <div className="flex space-x-3 items-center">
        <Button
          type="button"
          onClick={handleClick}
          className="bg-black border border-zinc-800 text-white py-3 px-3 rounded-md cursor-pointer space-x-3"
        >
          <BsImage className="fill-zinc-400 size-5" />
          <span>Выбрать файл</span>
        </Button>

        {imageSrc && (
          <Button
            type="button"
            onClick={handleClear}
            className="bg-black border border-zinc-800 text-white py-3 px-3 rounded-md cursor-pointer space-x-3"
          >
            <BsTrash className="fill-zinc-400 size-5" />
            <span>Очистить</span>
          </Button>
        )}
      </div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleFileChange}
        className="hidden"
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        SVG, PNG, JPG, JPEG.
      </p>
      {imageSrc && (
        <div className="mt-3 p-2 border border-zinc-500 border-dashed rounded-lg">
          <img
            src={imageSrc}
            alt="Selected"
            className="max-w-full h-auto max-h-[25rem] w-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};


export default ImageInput;
