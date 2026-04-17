import { ConversationContent } from './_components/conversation-content';
import { ConversationHeader } from './_components/conversation-header';
import { ConversationInput } from './_components/conversation-input';

const ConversationPage = () => {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <ConversationHeader title="App de finanças pessoais" />
            <ConversationContent />
           
        </div>
    );
};

export default ConversationPage;
