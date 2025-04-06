const adminAuth = (req, res, next) => {
    console.log("Admin Auth is getting Checked");
    const token = "12345";
    const isAdminAuthorized = token === "123456";
    
    if(isAdminAuthorized) {
        next();
    } else {
        res.status(401).send("Unauthorized Request");
    }
}

const userAuth = (req, res, next) => {
    console.log("user Auth is getting Checked");
    const token = "123456";
    const isAdminAuthorized = token === "123456";
    
    if(isAdminAuthorized) {
        next();
    } else {
        res.status(401).send("Unauthorized Request");
    }
}

module.exports = {
    adminAuth, userAuth
}