import type { MultiRes } from '$lib/types/multires';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatSrcset(multires: MultiRes): string {
	if (multires.length == 0) {
		return '';
	}
	return multires
		.slice(1)
		.map((v) => `${v.path} ${v.width}w`)
		.join(', ');
}
