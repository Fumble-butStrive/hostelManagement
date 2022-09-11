const contactReply  =  require('../models/contactReply.model');

async function insertContactReply(contactReply) {
    // console.log(`saving contactReply to db`, contactReply);
    return await new contactReply(contactReply).save();
}

async function contactReplyHistory() {
    let contactReplyHistory = await contactReply.find({});
    if(contactReplyHistory) {
        return contactReplyHistory;
    }
    else {
        return throwError;
    }
}

module.exports = {
    insertContactReply,
    contactReplyHistory
};
