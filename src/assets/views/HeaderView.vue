<template>
    <div class="w-full h-screen ">
        <header class="bg-white w-full fixed top-0 left-0 z-50 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <!-- Logo -->
                <h1 class="text-2xl font-bold">PressMart.</h1>

                <!-- Menu Desktop -->
                <nav class="hidden md:flex space-x-6 font-semibold">
                    <router-link to="home" class="hover:text-blue-600"  active-class="text-blue-500 font-bold">Home</router-link>
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
              <router-link href="#" class="block" active-class="text-blue-600 font-bold">Home</router-link>
                    <a href="#" class="block">Shop</a>
                    <a href="#" class="block">Blocs</a>
                    <a href="#" class="block">Buy</a>
            </div>
        </header>
        <div class="w-full h-[10%]"></div>
        <div class="flex-1">
            <router-view></router-view>
        </div>
    </div>
</template>