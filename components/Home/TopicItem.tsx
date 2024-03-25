import { BellRing, Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

type CardProps = React.ComponentProps<typeof Card> & {title: string, link?: string};

export function TopicItem({ className, title, link,  ...props }: CardProps) {
  return (
    <Card className={cn('bg-transparent', className)} {...props}>
      <CardHeader>
        <CardTitle className='mb-5'>{title}</CardTitle>
        <CardDescription className='font-[400] px-10'>Войдите в аккаунт чтобы читать статьи на эту тему</CardDescription>
      </CardHeader>
     
      
    </Card>
  );
}
