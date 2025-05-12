<template>
    <div class="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-4 py-10"
        :style="{ backgroundImage: 'url(/img/crypto3.jpg)' }">
        <!-- Overlay sombre pour lisibilité -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

        <!-- Contenu principal -->
        <div class="relative z-10 w-full max-w-4xl space-y-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
            <!-- Sélections AES et mode -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select id="aes" v-model="aes"
                    class="h-12 border text-white border-gray-300 text-sm w-full px-4 rounded-md bg-white/10  focus:ring-2 focus:ring-purple-600 focus:outline-none">
                    <option selected disabled class="text-black">---Choisir votre la taille de votre cle---</option>
                    <option value="128" class="text-black">AES 128</option>
                    <option value="192" class="text-black">AES 192</option>
                    <option value="256" class="text-black">AES 256</option>
                </select>

                <select id="chiffrement" v-model="chiffrement"
                    class="h-12 border border-gray-300 text-sm w-full px-4 rounded-md bg-white/10 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none">
                    <option selected disabled class="text-black">---Sélectionner le chiffrement ou le déchiffrement----
                    </option>
                    <option value="Chiffrement" class="text-black">Chiffrement</option>
                    <option value="Dechiffrement" class="text-black">Déchiffrement</option>
                </select>
            </div>

            <!-- Choix de fichier pour le chiffrement -->
            <div>
                <select id="underline_select" v-model="typeFichier" @change="handleFichier"
                    class="w-full border-b-2 border-gray-200 bg-transparent py-2.5 px-1 text-sm text-white focus:outline-none focus:border-purple-500">
                    <option disabled selected class="text-black">---Choisir le type de votre fichier---</option>
                    <option value="image" class="text-black">Fichier image</option>
                    <option value="texteFichier" class="text-black">Fichier texte</option>
                    <option value="texte" class="text-black">Texte brut</option>
                </select>
            </div>
            <div class="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_password" id="floating_password" v-model="password"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                    placeholder=" " required />
                <label for="floating_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">mot
                    de passe</label>
            </div>
            <div class="relative z-0 w-full mb-5 group"
                v-if="chiffrement === 'Dechiffrement' && typeFichier === 'texte'">
                <input type="text" name="floating_password" id="floating_password" v-model="ciphertext"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                    placeholder=" " required />
                <label for="floating_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Entrez
                    le texte chiffré (base64)</label>
            </div>
            <div class="relative z-0 w-full mb-5 group"
                v-if="chiffrement === 'Dechiffrement' && typeFichier === 'texte'">
                <input type="text" v-model="salt"
                    class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                    placeholder=" " required />
                <label for="floating_password"
                    class="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Entrez
                    le sel (hex)</label>
            </div>





            <!-- Zone de texte ou upload -->
            <div class="space-y-3">
                <textarea v-if="typeFichier === 'texte' && chiffrement !== 'Dechiffrement'" v-model="text"
                    placeholder="Entrez le texte que vous voulez chiffez"
                    class="w-full min-h-[150px] max-h-[500px] p-4 rounded-md bg-white text-black resize-y shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>

                <!-- Upload si image ou fichier texte -->
                <label
                    v-if="chiffrement === 'Chiffrement' && (typeFichier === 'image' || typeFichier === 'texteFichier')"
                    for="uploadFile1"
                    class="bg-white/20 text-white font-semibold text-base rounded-md h-60 flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-400 w-full transition hover:border-purple-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-11 mb-3 fill-gray-300" viewBox="0 0 32 32">
                        <path
                            d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" />
                        <path
                            d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" />
                    </svg>
                    Upload file
                    <input type="file" id="uploadFile1" @change="handleFileChange" class="hidden" />
                    <p class="text-xs font-medium text-slate-300 mt-2">
                        {{ typeFichier === 'image' ? 'PNG, JPG, SVG, WEBP, GIF' : 'PDF, DOCX, CSV, WEBP' }} sont
                        acceptés.
                    </p>
                </label>
                <div class="flex text-green-400 space-x-2" v-if="filename !== ''">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd"
                            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                            clip-rule="evenodd" />
                    </svg>

                    <p class="">fichier uploader avec sucess</p>
                </div>
            </div>

            <!-- Bouton d'action -->
            <div class="flex w-full justify-end">
                <button @click="typeFichier !== 'texte' ? submitEncryptFile() : submitEncryptText()"
                    v-if="chiffrement === 'Chiffrement' && loading==false"
                    class="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-all duration-500 transform hover:scale-105 shadow-lg">
                    Chiffrement
                </button>

                <div role="status" v-if="loading==true">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>

                <button @click="typeFichier == 'texte' ? decryptText() : submitEncryptText()"
                    v-if="chiffrement === 'Dechiffrement' && loading==false"
                    class="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-all duration-500 transform hover:scale-105 shadow-lg">
                    Dechiffrement
                </button>

            </div>
        </div>

        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div class="bg-white p-8 rounded-lg max-w-lg w-full text-center space-y-5">
                <h3 class="text-xl font-semibold text-black">Résultat du Chiffrement</h3>

                <div class="w-full max-w-lg">

                    <div class="flex items-center">
                        <span
                            class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">Clé
                            (hex)</span>
                        <div class="relative w-full">
                            <input id="website-url" type="text" aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :value="result.key" readonly disabled />
                        </div>
                        <button data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url"
                            class="shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700"
                            type="button">
                            <span id="default-icon">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 18 20">
                                    <path
                                        d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                            <span id="success-icon" class="hidden">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </button>
                        <div id="tooltip-website-url" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                            <span id="default-tooltip-message">Copy link</span>
                            <span id="success-tooltip-message" class="hidden">Copied!</span>
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>

                </div>
                <div class="w-full max-w-lg">

                    <div class="flex items-center">
                        <span
                            class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">Sel
                            (hex)</span>
                        <div class="relative w-full">
                            <input id="website-url" type="text" aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :value="result.salt" readonly disabled />
                        </div>
                        <button data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url"
                            class="shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700"
                            type="button">
                            <span id="default-icon">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 18 20">
                                    <path
                                        d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                            <span id="success-icon" class="hidden">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </button>
                        <div id="tooltip-website-url" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                            <span id="default-tooltip-message">Copy link</span>
                            <span id="success-tooltip-message" class="hidden">Copied!</span>
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>

                </div>
                <div class="w-full max-w-lg">

                    <div class="flex items-center">
                        <span
                            class="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">Texte
                            chiffré (base64):</span>
                        <div class="relative w-full">
                            <input id="website-url" type="text" aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                :value="result.ciphertext" readonly disabled />
                        </div>
                        <button data-tooltip-target="tooltip-website-url" data-copy-to-clipboard-target="website-url"
                            class="shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700"
                            type="button">
                            <span id="default-icon">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 18 20">
                                    <path
                                        d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                            <span id="success-icon" class="hidden">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </button>
                        <div id="tooltip-website-url" role="tooltip"
                            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                            <span id="default-tooltip-message">Copy link</span>
                            <span id="success-tooltip-message" class="hidden">Copied!</span>
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>

                </div>
                <button @click="closeModal"
                    class="mt-4 px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-md">
                    Fermer
                </button>

            </div>
        </div>
        <div v-if="showModal1" class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div class="bg-white p-8 rounded-lg text-black max-w-lg w-full text-center space-y-5">
                <h3 class="text-xl font-semibold ">Résultat du Dechiffrement</h3>
                <p>{{ decryptedText }}</p>

                <button @click="closeModal1"
                    class="mt-4 px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-md">
                    Fermer
                </button>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            typeFichier: "---Choisir le type de votre fichier---",
            chiffrement: "---Sélectionner le chiffrement ou le déchiffrement----",
            text: "",
            password: "",
            result: [],
            aes: "---Choisir votre la taille de votre cle---",
            keySize: 0,
            filename: '',
            salt: '',
            ciphertext: '',
            decryptedText: "",
            loading:false,
            showModal1: false,
            showModal: false, // État du modal
        };
    },
    methods: {
        handleFileChange(e) {
            this.filename = e.target.files[0]
            console.log(this.filename)
        },
        async submitEncryptText() {
            this.loading = true
            if (this.aes === "128") {
                this.keySize = 128
            }
            if (this.aes === "192") {
                this.keySize = 192
            }
            if (this.aes === "256") {
                this.keySize = 256
            }

            if (this.keySize == 0) {
                alert("choississez la Taille de clé")
                return
            }
            if (this.password == "") {
                alert("Entrer un mot de passe")
                return
            }
            if (this.text == "" && typeFichier) {
                alert("Entrer le texte a chiffrer")
                return
            }
            try {
                const response = await this.axios.post('http://127.0.0.1:5000/encrypt-text', {
                    text: this.text,
                    password: this.password,
                    keySize: this.keySize
                });

                this.result = response.data;
                setTimeout(()=>{
                    this.showModal = true;
                    this.loading = false // Ouvrir le modal après chiffrement
                },5000)
               
            } catch (error) {
                console.error("Erreur pendant le chiffrement :", error);
                alert("Une erreur est survenue.");
                this.loading = false 
            }
        },
        async submitEncryptFile() {
            this.loading = true 
            if (!this.filename || !this.password) {
                alert('Veuillez sélectionner un fichier et un mot de passe.')
                return
            }
            if (this.aes === "128") {
                this.keySize = 128
            }
            if (this.aes === "192") {
                this.keySize = 192
            }
            if (this.aes === "256") {
                this.keySize = 256
            }

            if (this.keySize == 0) {
                alert("choississez la Taille de clé")
                return
            }


            const formData = new FormData()
            formData.append('file', this.filename)
            formData.append('password', this.password)
            formData.append('keySize', this.keySize)

            try {
                const response = await this.axios.post('http://localhost:5000/encrypt-file', formData, {
                    responseType: 'blob',
                })

                // Télécharger le fichier chiffré
                const blob = new Blob([response.data])
                const url = URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.download = this.filename.name + '.aes'
                link.click()
                URL.revokeObjectURL(url)
                setTimeout(()=>{
                this.loading = false 
                this.filename = ""
                },5000)
               
            } catch (error) {
                console.error('Erreur lors du chiffrement :', error)
                this.loading = false 
                alert('Erreur lors du chiffrement du fichier.')
            }
        },
        async decryptText() {
            this.loading = true 
            if (this.aes === "128") {
                this.keySize = 128
            }
            if (this.aes === "192") {
                this.keySize = 192
            }
            if (this.aes === "256") {
                this.keySize = 256
            }
            if (!this.ciphertext || !this.password || !this.salt || !this.keySize) {
                alert("Tous les champs sont requis.")
                return
            }

            try {
                const response = await this.axios.post('http://localhost:5000/decrypt-text', {
                    ciphertext: this.ciphertext,
                    password: this.password,
                    salt: this.salt,
                    keySize: this.keySize
                })

                if (response.data.decrypted) {
                    this.decryptedText = response.data.decrypted
                    setTimeout(()=>{
                this.loading = false 
                this.showModal1 = true
                },5000)
                    
                   
                } else {
                    alert("Erreur : " + (response.data.error || "inconnue"))
                    this.loading = false 
                }
            } catch (error) {
                console.error("Erreur lors du déchiffrement :", error)
                alert("Échec du déchiffrement.")
                this.loading = false 
            }
        },

        closeModal() {
            this.showModal = false; // Fermer le modal
        },
        closeModal1() {
            this.showModal1 = false; // Fermer le modal
        },
    },
};
</script>
