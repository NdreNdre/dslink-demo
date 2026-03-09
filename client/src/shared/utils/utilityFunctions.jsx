import toast from "react-hot-toast";

export const toastResponse = (successMsg, result) => {
    if(result.success){
        toast.success(successMsg);
    } else {
        toast.error(result.message || 'Something Went Wrong' );
    }   
}

export const toastResponseRefresh = (successMsg, result) => {
    if(result.success){
        toast.success(successMsg);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    } else {
        toast.error(result.message || 'Something Went Wrong' );
    }   
}

export const redirectToastResponse = (successMsg, result, url, navigate) => {
    if(result.success){
        toast.success(successMsg);
        navigate(`/${url}`);
    } else {
        toast.error(result.message || 'Something Went Wrong' );
    } 
}

export const throwErrorService = (error) => {
    throw new Error(error.response?.data?.message || "Something went wrong");
}