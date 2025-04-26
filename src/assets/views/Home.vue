<template>
    <div class="w-full h-full  ">
        <!-- Header -->
        <header class="bg-white w-full fixed top-0 left-0 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <!-- Logo -->
                <h1 class="text-2xl font-bold">PressMart.</h1>

                <!-- Menu Desktop -->
                <nav class="hidden md:flex space-x-6 font-semibold">
                    <a href="#" class="hover:text-blue-600">Homes</a>
                    <a href="#" class="hover:text-blue-600">Shop</a>
                    <a href="#" class="hover:text-blue-600">Blocs</a>
                    <a href="#" class="hover:text-blue-600">Buy</a>
                </nav>

                <!-- Icons -->
                <div class="flex space-x-3">
                    <!-- User -->
                    <div class="relative px-2 py-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.1a7.5 7.5 0 0115 0 17.9 17.9 0 01-15 0z" />
                        </svg>
                    </div>

                   

                    <!-- Notification -->
                    <div class="relative px-2 py-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M21 8.25c0-2.49-2.1-4.5-4.69-4.5-1.93 0-3.59 1.13-4.31 2.73C11.3 4.88 9.63 3.75 7.69 3.75 5.1 3.75 3 5.77 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <div
                            class="w-4 h-4 bg-blue-400 text-white rounded-full absolute top-0 right-0 text-[10px] font-bold flex items-center justify-center">
                            10
                        </div>
                    </div>

                    <!-- Another Icon -->
                    <div class="relative px-2 py-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.1a7.5 7.5 0 0115 0 17.9 17.9 0 01-15 0z" />
                        </svg>
                        <div
                            class="w-4 h-4 bg-blue-400 text-white rounded-full absolute top-0 right-0 text-[10px] font-bold flex items-center justify-center">
                            90
                        </div>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="md:hidden" id="menu-btn">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Menu Mobile -->
            <div id="mobile-menu" class="md:hidden hidden bg-white px-6 py-4 space-y-3 font-semibold shadow-lg">
              <a href="#" class="block">Homes</a>
                    <a href="#" class="block">Shop</a>
                    <a href="#" class="block">Blocs</a>
                    <a href="#" class="block">Buy</a>
            </div>
        </header>

        <div class="w-full h-[10%]"></div>
        <div class="w-full min-h-[75vh] bg-[#F8F8F8] flex justify-center items-center py-10">
            <div class="w-[90%] flex flex-col md:flex-row h-full items-center">

                <!-- Texte -->
                <div class="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
                    <div class="space-y-5 text-center md:text-left">
                        <h1 class="text-3xl md:text-4xl font-bold capitalize">
                            Marche avec style, vis avec confiance
                        </h1>
                        <p class="text-gray-600">
                            Découvre notre collection exclusive de chaussures alliant confort, élégance
                            et performance. Trouve la paire qui fera toute la différence à chaque pas.
                        </p>
                        <div class="flex justify-center md:justify-start space-x-4">
                            <button
                                class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-[#0065CE] transition-all duration-500">
                                Acheter maintenant
                            </button>
                            <button
                                class="px-6 py-2 border border-[#0065CE] text-[#0065CE] rounded-md hover:bg-[#0065CE] hover:text-white transition-all duration-500">
                                Lire maintenant
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Image ou couleur -->
                <div class="w-full md:w-1/2 h-64 md:h-auto bg-blue-400 rounded-lg">
                    <!-- Tu peux mettre une image ici si tu veux -->
                </div>
            </div>
        </div>

        <div class="w-full bg-white py-6 flex justify-center items-center">
            <div class="w-[90%] flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6">

                <!-- Livraison gratuite -->
                <div class="flex space-x-3 items-center w-full sm:w-auto">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-400" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                    </div>
                    <div class="text-sm">
                        <p class="font-bold">Livraison gratuite</p>
                        <p>Recevez vos commande à domicile</p>
                    </div>
                </div>

                <!-- Paiement sécurisé -->
                <div class="flex space-x-3 items-center w-full sm:w-auto">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-400" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                    </div>
                    <div class="text-sm">
                        <p class="font-bold">Paiement sécurisé</p>
                        <p>Payez en toute sécurité</p>
                    </div>
                </div>

                <!-- Remboursement -->
                <div class="flex space-x-3 items-center w-full sm:w-auto">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-400" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                        </svg>
                    </div>
                    <div class="text-sm">
                        <p class="font-bold">100% de remboursement</p>
                        <p>En cas de mauvais produit</p>
                    </div>
                </div>

                <!-- Support en ligne -->
                <div class="flex space-x-3 items-center w-full sm:w-auto">
                    <div class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-blue-400" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>
                    </div>
                    <div class="text-sm">
                        <p class="font-bold">Support en ligne</p>
                        <p>Suivi 24/7</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="w-full h-[90%]">
            <div class="w-full h-[14%] space-y-2">
                <h1 class="capitalize text-center text-[25px] font-semibold"> principaux Produits</h1>
                <!-- <div class="w-full items-center justify-center flex ">
                    <nav class="space-x-4 font-semibold">
                        <a href="#">Chaussures Hommes</a>
                        <a href="#">Chaussures Femmes</a>
                        <a href="#">Chaussures Mixtes</a>
                    </nav>
                </div> -->
            </div>
            <div class="w-full h-[86%] flex justify-center items-center">
                <div
                    class="w-[95%] h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-scroll custom-scrollbar px-2">

                    <div class="h-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                        v-for="i in chaussures" :key="i">
                        <img class="h-48 w-full object-cover rounded-t-lg" :src="'/img/'+i.img"
                            alt="product image" />

                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-[14px] font-semibold tracking-tight mt-5 text-gray-900 dark:text-white">
                                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                </h5>
                            </a>

                            <div class="flex items-center mt-2.5 mb-5">
                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                    <template v-for="star in 5" :key="star">
                                        <svg class="w-4 h-4"
                                            :class="star < 5 ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'"
                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 22 20">
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </template>
                                </div>
                                <span
                                    class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>

                            <div class="flex items-center justify-between">
                                <span class="text-XL font-bold text-gray-900 dark:text-white">XAF 5000</span>
                                <a href="#"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="w-full flex justify-center items-center h-auto py-10">
            <div class="w-[90%]">
                <!-- Titre -->
                <h2 class="text-xl md:text-2xl font-bold text-black mb-6 text-center">Témoignages des visiteurs</h2>

                <!-- Grille des témoignages -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Témoignage 1 -->
                    <div class="bg-white p-4 rounded-xl shadow-md flex flex-col space-y-2">
                        <div class="flex items-center space-x-3">
                            <div
                                class="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
                                A</div>
                            <p class="font-bold text-sm">Amina Traoré</p>
                        </div>
                        <p class="text-sm text-gray-600">"J’ai adoré la simplicité du site, très fluide et les produits
                            sont
                            bien mis en avant !"</p>
                    </div>

                    <!-- Témoignage 2 -->
                    <div class="bg-white p-4 rounded-xl shadow-md flex flex-col space-y-2">
                        <div class="flex items-center space-x-3">
                            <div
                                class="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
                                K</div>
                            <p class="font-bold text-sm">Koffi Daniel</p>
                        </div>
                        <p class="text-sm text-gray-600">"J’ai reçu ma commande à temps, livraison rapide et support
                            très
                            réactif."</p>
                    </div>

                    <!-- Témoignage 3 -->
                    <div class="bg-white p-4 rounded-xl shadow-md flex flex-col space-y-2">
                        <div class="flex items-center space-x-3">
                            <div
                                class="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
                                S</div>
                            <p class="font-bold text-sm">Sonia Mendy</p>
                        </div>
                        <p class="text-sm text-gray-600">"Le service client est incroyable, j’ai eu une réponse dans
                            l’heure !"
                        </p>
                    </div>
                </div>
            </div>
        </div>



        <div class="w-full flex justify-center items-center my-4 ">
            <div class="h-full lg:w-[90%] w-full ">
                <h1 class="text-xl md:text-2xl font-bold text-black mb-6 text-center">A propos de PressMart</h1>

                <div id="accordion-color" data-accordion="collapse"
                    data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white">
                    <h2 id="accordion-color-heading-1">
                        <button type="button"
                            class="flex border-b  border-gray-700 items-center justify-between w-full p-5 font-medium rtl:text-right dark:hover:bg-gray-800 gap-3"
                            data-accordion-target="#accordion-color-body-1" aria-expanded="true"
                            aria-controls="accordion-color-body-1" @click="value1 = !value1">
                            <span>Comment passer une commande sur l’application ?</span>
                            <svg data-accordion-icon class="w-3 h-3  shrink-0" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                                :class="value1 == false ? '' : 'rotate-180'">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-1" aria-labelledby="accordion-color-heading-1"
                        :class="value1 == false ? '' : 'hidden duration-700 transition-all'">
                        <div class="p-5  dark:bg-gray-900">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">C’est super simple ! Tu ouvres
                                l’application,
                                tu choisis ta paire de chaussures préférée, tu sélectionnes ta pointure,
                                tu cliques sur “Commander” et tu précises ton adresse. On s’occupe du reste !</p>

                        </div>
                    </div>
                    <h2 id="accordion-color-heading-2">
                        <button type="button"
                            class="flex border-b border-gray-700 items-center justify-between w-full p-5 font-medium rtl:text-right dark:hover:bg-gray-800 gap-3"
                            data-accordion-target="#accordion-color-body-1" aria-expanded="true"
                            aria-controls="accordion-color-body-1" @click="value2 = !value2">
                            <span>Is there a Figma file available?</span>
                            <svg data-accordion-icon class="w-3 h-3  shrink-0" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                                :class="value2 == false ? '' : 'rotate-180'">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-2" :class="value2 == false ? '' : 'hidden duration-700 transition-all'"
                        aria-labelledby="accordion-color-heading-2">
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and
                                designed using
                                the Figma software so everything you see in the library has a design equivalent in our
                                Figma
                                file.</p>
                            <p class="text-gray-500 dark:text-gray-400">Check out the <a
                                    href="https://flowbite.com/figma/" class=" hover:underline">Figma design system</a>
                                based on the utility classes from Tailwind
                                CSS and components from Flowbite.</p>
                        </div>
                    </div>
                    <h2 id="accordion-color-heading-3">
                        <button type="button"
                            class="flex border-b border-gray-700 items-center justify-between w-full p-5 font-medium rtl:text-right dark:hover:bg-gray-800 gap-3"
                            data-accordion-target="#accordion-color-body-1" aria-expanded="true"
                            aria-controls="accordion-color-body-1" @click="value3 = !value3">
                            <span>What are the differences between Flowbite and Tailwind UI?</span>
                            <svg data-accordion-icon class="w-3 h-3  shrink-0" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"
                                :class="value3 == false ? '' : 'rotate-180'">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-color-body-3" :class="value3 == false ? '' : 'hidden duration-700 transition-all'"
                        aria-labelledby="accordion-color-heading-3">
                        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                            <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core
                                components
                                from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid
                                product.
                                Another difference is that Flowbite relies on smaller and standalone components, whereas
                                Tailwind UI offers sections of pages.</p>
                            <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both
                                Flowbite,
                                Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from
                                using the
                                best of two worlds.</p>
                            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="https://flowbite.com/pro/" class=" hover:underline">Flowbite Pro</a></li>
                                <li><a href="https://tailwindui.com/" rel="nofollow" class=" hover:underline">Tailwind
                                        UI</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="w-full flex justify-center items-center">
            <div class="w-[90%] h-full">

                <div class="w-full p-4 text-center bg-white   sm:p-8 ">
                    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Travaillez rapidement, où que vous
                        soyez
                    </h5>
                    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Restez à jour et faites
                        avancer votre
                        travail avec PressMart sur iOS et Android. Téléchargez l’application dès aujourd’hui.</p>
                    <div
                        class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                        <a href="#"
                            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"
                                data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                </path>
                            </svg>
                            <div class="text-left rtl:text-right">
                                <div class="mb-1 text-xs">Download on the</div>
                                <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                            </div>
                        </a>
                        <a href="#"
                            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab"
                                data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
                                </path>
                            </svg>
                            <div class="text-left rtl:text-right">
                                <div class="mb-1 text-xs">Get in on</div>
                                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <footer class="bg-white w-full  ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PressMart.</span>

                    <ul
                        class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 PressMart. All Rights
                    Reserved.</span>
            </div>
        </footer>


    </div>
</template>
<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* Chrome/Safari/Webkit */
}

.custom-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
</style>


<script>

export default {
    data() {
        return {
            value1: true,
            value2: true,
            value3: true,
            chaussures:[
                {img:"chaussure1.jpg"},
                {img:"chaussure2.jpg"},
                {img:"chaussure3.jpg"},
                {img:"chaussure4.jpg"},
                {img:"chaussure5.jpg"},
                {img:"chaussure6.jpg"},
                {img:"chaussure7.jpg"},
            ]
        }
    },
    mounted() {
        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }
}
</script>