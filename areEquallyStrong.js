function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    var me = Math.max(yourLeft, yourRight);
    var friend = Math.max(friendsLeft, friendsRight)
    if (me != friend){
        return false;
    }else if (yourLeft + yourRight != friendsLeft + friendsRight) {
        return false;
    } else {
        return true;
    }
}

//problem description: https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL
