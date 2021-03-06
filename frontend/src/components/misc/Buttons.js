import tw from "twin.macro";
export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
export const SendButton = tw.button`px-3 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
export const DeleteButton = tw.button`px-1 py-1 font-bold rounded-full hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;
export const MsgButtonCont = tw.div`inline-flex bg-white hocus:bg-gray-400 top-0 mt-2 ml-2 mb-2 rounded-full px-1 py-1 content-center right-0 focus:shadow-outline focus:outline-none transition duration-300`;
