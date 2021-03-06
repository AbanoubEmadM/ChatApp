const TheirMessage= ({lastMessageKey , message}) => {
    const isFirstMessageByUser = !lastMessageKey || lastMessageKey.sender.username !== message.sender.username;
    var test = message.text.replace(/<[^>]+>/g, '');

    return (
        <div className="message-row">
            {isFirstMessageByUser &&(
                <div 
                className="message-avatar"
                style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                />
            )}
                {message?.attachments?.length > 0 ?
                (
            <img
             src={message.attachments[0].file}
             alt="message-attachment"
             className="message-image"
             style={{marginLeft:isFirstMessageByUser ? '4px' : '48px'}}
             />
             ) : (
            <div className="message" style={{float:'right',backgroundColor:'#cabcdc'}}>
                {test}
            </div>
             )
}
        </div>
    )
}
export default TheirMessage
