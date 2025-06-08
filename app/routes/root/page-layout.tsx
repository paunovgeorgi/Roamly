import RootNavbar from 'components/RootNavbar';
import React from 'react'
import { Link, Outlet, redirect, useNavigate } from 'react-router';
import { getExistingUser, logoutUser, storeUserData } from '~/appwrite/auth';
import { account } from '~/appwrite/client';


//   export async function clientLoader() {
//     try {
//         const user = await account.get();

//         if(!user.$id) return redirect('/sign-in');

//         const existingUser = await getExistingUser(user.$id);
//         return existingUser?.$id ? existingUser : await storeUserData();
//     } catch (e) {
//         console.log('Error fetching user', e)
//         return redirect('/sign-in')
//     }
// }

export async function clientLoader() {
    try {
        const user = await account.get();
        
        // If no user is authenticated, return null instead of redirecting
        if(!user.$id) return 'Guest';

        // If user is authenticated, get/create their data
        const existingUser = await getExistingUser(user.$id);
        return existingUser?.$id ? existingUser : await storeUserData();
    } catch (e) {
        console.log('Error fetching user', e);
        // Return null instead of redirecting on error
        return null;
    }
}

const PageLayout = () => {

   
  return (
     <div className="bg-light-200">
            <RootNavbar />
            <Outlet />
        </div>
  )
}

export default PageLayout