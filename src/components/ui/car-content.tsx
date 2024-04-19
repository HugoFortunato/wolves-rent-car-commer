'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import { CarDetailType } from '@/app/car-detail/[id]/page';
import { Button } from './button';
import { useCartStore } from '@/store';

export default function CarContent({ carList }: CarDetailType) {
  const useStore = useCartStore();

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{carList.name}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sunt.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center">
        <Image
          src={carList.image.url}
          width={250}
          height={100}
          alt="car"
          quality={100}
        />
      </CardContent>

      <CardContent>
        <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {formatPrice(carList.price)}
        </span>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button className="w-full" onClick={() => useStore.addToCart(carList)}>
          Rent
        </Button>
      </CardFooter>
    </Card>
  );
}
