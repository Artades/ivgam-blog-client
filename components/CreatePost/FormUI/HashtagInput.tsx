import React, { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { IoClose } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

interface HashtagInputProps {
  initialHashtags?: string[];
  onUpdate: (hashtags: string[]) => void;
}

const HashtagInput: React.FC<HashtagInputProps> = ({
  initialHashtags = [],
  onUpdate,
}) => {
  const [hashtag, setHashtag] = useState('');
  const [hashtags, setHashtags] = useState<string[]>(initialHashtags);

  const updateHashtags = useCallback(() => {
    onUpdate(hashtags);
  }, [hashtags, onUpdate]);

  useEffect(() => {
    updateHashtags();
  }, [hashtags, updateHashtags]);

  const handleAddHashtag = () => {
    if (hashtag.trim() !== '') {
      setHashtags((prevHashtags) => [...prevHashtags, hashtag]);
      setHashtag('');
    }
  };

  const handleRemoveHashtag = (index: number) => {
    setHashtags((prevHashtags) => {
      const updatedHashtags = [...prevHashtags];
      updatedHashtags.splice(index, 1);
      return updatedHashtags;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHashtag(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddHashtag();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1">
        {hashtags.map((tag, index) => (
          <div
            key={index}
            className="bg-zinc-800 flex items-center rounded-md my-1 px-2"
          >
            <span className="text-sm">{tag}</span>
            <IoClose
              className="text-sm opacity-55 hover:text-white cursor-pointer ml-1"
              onClick={() => handleRemoveHashtag(index)}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-3 w-full ">
        <Input
          type="text"
          value={hashtag}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Введите хэштег"
          className="py-2 sm:w-full w-3/4"
        />
        <Button
          onClick={(e: any) => {
            e.preventDefault();
            handleAddHashtag();
          }}
          className="sm:hidden block w-1/4 px-2"
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default HashtagInput;
