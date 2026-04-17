import { ChatHeader } from './_components/chat-header';
import { ChatInput } from './_components/chat-input';

const ChatPage = () => {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <ChatHeader />

            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
                <div className="flex flex-col items-center gap-3 text-center">
                    <h1 className="font-heading text-5xl font-black leading-tight tracking-tight text-foreground">
                        O que vamos
                        <br />
                        nomear hoje?
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Descreva sua ideia, nicho ou público-alvo para começar.
                    </p>
                </div>

                <ChatInput />
            </div>
        </div>
    );
};

export default ChatPage;
