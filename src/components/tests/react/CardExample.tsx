import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/react/card';
import { Button } from '@/components/ui/react/button';

const CardExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Basic Card */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>A simple card example</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is a basic card component with header, content, and footer sections.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost">Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </Card>

      {/* Feature Card */}
      <Card className="overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <CardHeader>
          <CardTitle>Feature Card</CardTitle>
          <CardDescription>Card with image and actions</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card features a gradient banner and interactive elements.</p>
          <div className="mt-4 flex items-center">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-500">
              ✓
            </span>
            <span className="ml-2">Included feature</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Learn More</Button>
        </CardFooter>
      </Card>

      {/* Product Card */}
      <Card className="border-2 border-primary">
        <CardHeader className="bg-primary/5">
          <CardTitle className="text-primary">Premium Plan</CardTitle>
          <CardDescription>
            <span className="text-2xl font-bold">$29</span>/month
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>Feature one</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>Feature two</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>Feature three</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Subscribe Now</Button>
        </CardFooter>
      </Card>

      {/* Horizontal Card */}
      <Card className="flex flex-row overflow-hidden">
        <div className="w-1/3 bg-slate-200"></div>
        <div className="w-2/3">
          <CardHeader>
            <CardTitle>Horizontal Card</CardTitle>
            <CardDescription>Layout optimized for articles</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card uses a horizontal layout ideal for article previews or sidebars.</p>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0">Read More →</Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default CardExample; 