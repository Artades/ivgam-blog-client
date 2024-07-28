import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SortProps } from '@/types/sort.type';

interface SortSelectProps {
  sortParams: { dateSort?: SortProps; popularSort?: SortProps };
  setSortParams: React.Dispatch<
    React.SetStateAction<{ dateSort?: SortProps; popularSort?: SortProps }>
  >;
}

export function SortSelect({ sortParams, setSortParams }: SortSelectProps) {
  return (
    <div className="flex gap-x-2">
      <Select
        value={sortParams.dateSort}
        onValueChange={(value) =>
          setSortParams((prev) => ({ ...prev, dateSort: value as SortProps }))
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="По дате" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Дата</SelectLabel>
            <SelectItem value="desc">Новые</SelectItem>
            <SelectItem value="asc">Старые</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={sortParams.popularSort}
        onValueChange={(value) =>
          setSortParams((prev) => ({
            ...prev,
            popularSort: value as SortProps,
          }))
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="По популярности" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Популярность</SelectLabel>
            <SelectItem value="desc">Более популярные</SelectItem>
            <SelectItem value="asc">Менее популярные</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
