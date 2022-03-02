import { useContext } from "react";
import {Link} from 'react-router-dom';
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";
import * as ROUTES from '../constants/routes';
import { DEFAULT_IMAGE_PATH } from '../constants/paths';


export default function Header(){
    const {firebase} = useContext(FirebaseContext);
    const {user} = useContext(UserContext);
    


    return <header className="h-16 bg-white border-b border-gray-primary mb-8">
        <div className="container mx-auto max-w-screen-lg h-full flex">
            <div className="flex justify-between h-full">
                <div className="text-gray-700 text-center flex items-center align-items cursor-pointer w-30">
                    <h1 className="flex-auto justify-center w-full">
                        <a href={ROUTES.DASHBOARD}>
                            <img src="/images/logo.png" alt="Fibre" className="mt-2 w-5/12" />
                        </a>
                    </h1>
                </div>
                <div className="text-center flex items-center align-items flex-auto w-50">
                    <p>I am the fibrecoins</p>
                </div>
                <div className="relative text-gray-600 items-center">
                    <input type="search" name="serch" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border-2 border-gray"></input>
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        className="h-4 w-4 fill-current"
                        enableBackground="new 0 0 56.966 56.966"
                        version="1.1"
                        viewBox="0 0 56.966 56.966"
                        xmlSpace="preserve"
                        >
                        <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"></path>
                        </svg>
                    </button>
                </div>
                <div className="text-gray-700 text-center flex items-center align-items">
                    {user ? (
                        //checks if theres a user 
                    <>
                        <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                        <svg
                            className="w-8 mr-6 text-black-light cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        </Link>
                        <button 
                        type="button"
                        title="SignOut"
                        onClick={() => firebase.auth().signOut()}
                        //allows you to sign out using keyboard
                        onKeyDown = {(event) => {
                            if (event.key == 'Enter'){
                                firebase.auth().signOut();
                            }
                        }}
                        >
                        <svg
                        className="w-8 mr-6 text-black-light cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                    </button>
                    <button 
                        type="button"
                        title="SignOut"
                        onClick={() => firebase.auth().signOut()}
                        //allows you to sign out using keyboard
                        onKeyDown = {(event) => {
                            if (event.key == 'Enter'){
                                firebase.auth().signOut();
                            }
                        }}
                        >
                        <svg
                        className="w-8 mr-6 text-black-light cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                    </button>
                        <button 
                        type="button"
                        title="SignOut"
                        onClick={() => firebase.auth().signOut()}
                        //allows you to sign out using keyboard
                        onKeyDown = {(event) => {
                            if (event.key == 'Enter'){
                                firebase.auth().signOut();
                            }
                        }}
                        >
                        <svg
                        className="w-8 mr-6 text-black-light cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                    </button>
                    <div className="flex items-center cursor-pointer w-8">
                        <Link to={`/p/${user?.username}`}>
                        <img
                            className="rounded-full h-8 w-14 flex"
                            src={`/images/avatars/${user?.username}.jpg`}
                            alt={`${user?.username} profile`}
                            onError={(e) => {
                            e.target.src = DEFAULT_IMAGE_PATH;
                            }}
                        />
                        </Link>
                    </div>
                    
                        </>
                        ):(
                            <>
                            <Link to={ROUTES.LOGIN}>
                                <button 
                                    type="button"
                                    className="bg-blue-700 font-bold text-sm rounded text-white w-20 h-8"
                                    >Log In</button>
                            </Link>
                            <Link to={ROUTES.SIGN_UP}>
                            <button 
                                type="button"
                                className="font-bold text-sm rounded text-blue-medium w-20 h-8">Sign Up</button>
                            </Link></>
                        )}
                </div>
            </div>
        </div>
    </header>;
}