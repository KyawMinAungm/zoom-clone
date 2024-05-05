import React, { Children, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface MeetingModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  buttonText?: string;
  handleClick?: () => void;
  buttonIcon?: string;
  image?: string;
}

const MeetingModel = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  image,
  children,
  buttonIcon
}: MeetingModelProps) => {
  return (
    <Dialog open = {isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-dark-1 border-none w-full max-w-[520px] flex flex-col gap-6 px-6 py-9 text-white ">
        <div className="flex flex-col  gap-6 ">
            {image &&  (
                <div className="mx-auto">
                    <Image src={image} width={72} height={72} alt="image"/>
                </div>
            )}
            <DialogTitle className={cn('text-3xl font-bold leading-[42px] ',className)}>{title}</DialogTitle>
            {children}
            <Button className=" bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-blue-600" onClick={handleClick}>
                {buttonIcon && (
                    <Image src={buttonIcon} width={13} height={13} alt="button icon"/>
                )} &nbsp;
                {buttonText || "Schedule Meeting"}</Button>
        </div>
        
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModel;
