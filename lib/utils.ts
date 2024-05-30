import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { parse } from "date-fns";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
	const dateObj = dateFromString(date);
	const day = dateObj.getDate();
	const month = dateObj.toLocaleString("default", { month: "short" });
	const year = dateObj.getFullYear();

	return `${day} ${month}, ${year}`;
}

export function dateFromString(date: string) : Date {
	const formatString = "dd MM yyyy h a";
	return parse(date, formatString, new Date());
}