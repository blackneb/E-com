import { Ilaptop, Iphone,Itv, Iaccessories, Ibook, Iuserautorization, Notifications } from "../Models/Models";
import { ADD_LAPTOP, ADD_PHONE, ADD_TV, ADD_ACCESSORIES, ADD_BOOK, ADD_USER_AUTORIZATION,ADD_ALL,ADD_TO_CART,CURRENT_ITEM,ADD_QUANTITY,DECREASE_QUANTITY,REMOVE_ITEM, NOTIFICATION_ERROR,NOTIFICATION_INFO,NOTIFICATION_SUCCESS,NOTIFICATION_WARNING } from "./ActionTypes";

export const addLaptop = (laptop: Ilaptop) => {
    return{
        type: ADD_LAPTOP,
        payload: laptop,
    };
};

export const addPhone = (phone:Iphone) => {
    return{
        type: ADD_PHONE,
        payload:phone,
    };
};

export const addtv = (tv:Itv) => {
    return{
        type: ADD_TV,
        payload:tv,
    };
};

export const addaccessories = (accessories:Iaccessories) => {
    return{
        type: ADD_ACCESSORIES,
        payload: accessories,
    };
};

export const addbooks = (books:Ibook) => {
    return{
        type:ADD_BOOK,
        payload:books,
    };
};
export const adduserautorization = (userautorization:Iuserautorization) => {
    return{
        type:ADD_USER_AUTORIZATION,
        payload:userautorization,
    };
};

export const addall = (addall:any) => {
    return{
        type:ADD_ALL,
        payload:addall,
    }
}
export const addtocart = (addtocart:any) => {
    return{
        type:ADD_TO_CART,
        payload:addtocart,
    }
}
export const addquantity = (addquantity:any) => {
    return{
        type:ADD_QUANTITY,
        payload:addquantity,
    }
}
export const decreasequantity = (decreasequantity:any) => {
    return {
        type:DECREASE_QUANTITY,
        payload:decreasequantity,
    }
}
export const removeitem = (removeitem:any) => {
    return{
        type:REMOVE_ITEM,
        payload:removeitem,
    }
}

export const currentitem = (currentitem:any) => {
    return{
        type:CURRENT_ITEM,
        payload:currentitem,
    }
}
export const notificationsuccess = (notify:Notifications) => {
    return{
        type:NOTIFICATION_SUCCESS,
        payload:notify,
    }
}

export const notificationerror = (notify:Notifications) => {
    return{
        type:NOTIFICATION_ERROR,
        payload:notify,
    }
}

export const notificationinfo = (notify:Notifications) => {
    return{
        type:NOTIFICATION_INFO,
        payload:notify,
    }
}

export const notificationwarning =(notify:Notifications) => {
    return{
        type:NOTIFICATION_WARNING,
        payload:notify,
    }
}