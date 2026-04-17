export const UserMessage = ({ content }: { content: string }) => {
    return (
        <div className="flex justify-end">
            <div className="max-w-sm rounded-2xl rounded-tr-sm bg-primary/20 px-4 py-3 text-sm text-foreground">
                {content}
            </div>
        </div>
    );
};
