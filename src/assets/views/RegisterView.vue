<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="w-full h-full flex ">
        <div class="lg:w-1/2 w-full h-full  ">
            <div class="w-full h-[10%] flex justify-center items-center lg:items-end ">
                <h1 class="font-bold text-[14px] uppercase lg:text-[24px] text-black/70  ">Creer Votre Compte </h1>
            </div>
            <div class="w-full h-[90%] space-y-5">
                <div class="w-full h-auto flex justify-center items-center">
                    <form class="max-w-xl lg:mt-6 w-[90%] lg:mx-0 lg:w-[75%] lg:space-y-3">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_email"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                address</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="password" name="floating_password" id="floating_password"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_password"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="password" name="repeat_password" id="floating_repeat_password"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_repeat_password"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm
                                password</label>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_first_name"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                    name</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_last_name"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                    name</label>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone"
                                    id="floating_phone"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_phone"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                    number (+237 653228070)</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_company" id="floating_company"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_company"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company
                                    (Ex. Google)</label>
                            </div>
                        </div>
                        <div class="w-full h-12 ">
                            <button type="submit"
                                class="w-full h-full rounded-lg text-white cursor-pointer duration-700 transition-all hover:bg-blue-700 font-semibold bg-blue-600">Creer
                                votre Compte</button>
                        </div>
                    </form>


                </div>
                <div class="w-full   h-[15%]  space-y-4">

                    <div class="lg:w-[76%] w-[90%]  h-auto  mx-auto space-y-3 lg:space-y-0  lg:space-x-8 lg:flex">

                        <!-- Bouton Google -->
                        <button
                            class="flex items-center justify-center w-full h-12 space-x-3  bg-white border border-gray-300 rounded-lg shadow hover:shadow-md transition duration-300 hover:bg-gray-100">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                                class="w-5 h-5 mr-1" />
                            <span class="text-gray-700 font-medium">Connecter avec Google</span>
                        </button>

                        <!-- Bouton Facebook -->
                        <button
                            class="flex items-center justify-center w-full  h-12 space-x-3   bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow hover:shadow-md transition duration-300">

                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                fill="none" class="w-5 h-5 mr-1 bg-white rounded-full p-0.5">
                                <circle cx="24" cy="24" r="24" fill="#1877F2" />
                                <path
                                    d="M30.2 24H26V38H20V24H17V18.5H20V15.7C20 12.1 21.9 10 25.8 10H30V15.5H27.6C26.1 15.5 26 16.1 26 17.1V18.5H30L29.3 24Z"
                                    fill="white" />
                            </svg>

                            <span class="font-medium">Connecter avec Facebook</span>
                        </button>


                    </div>

                </div>
                <p class="text-center">Vous avez deja un compte ? <Router-link to="/login"
                        class="text-blue-700 cursor-pointer font-semibold">Connectez
                        vous </Router-link></p>
            </div>

        </div>
        <div class="bg-yellow-400 w-1/2 hidden lg:block h-full "></div>




    </div>
</template>