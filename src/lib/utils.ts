import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = ():string =>{
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(); 
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  let wordEnd = ""; 

  if(day.toString().endsWith("1")){
    wordEnd = "st";
  }else if(day.toString().endsWith("2")){
    wordEnd = "nd";
  }else{
    wordEnd = "th";
  }

  return `${day}${wordEnd} ${months[month]}, ${year}`
}