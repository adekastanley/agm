import { ImageOff } from "lucide-react";

export function EmptyState({ message = "No images found." }: { message?: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
                <ImageOff className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Nothing to see here</h3>
            <p className="text-gray-500">{message}</p>
        </div>
    );
}
