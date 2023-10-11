import express from 'express';
import { userSignup,userLogin, verifyEmail,getUser ,updatePassword, verifyUser } from '../controllers/user-controller.js';
import { workerRegister, getAllWorkers, getWorker, updateWorker, deleteWorker , filterWorker} from '../controllers/worker-controller.js';
import { contractorRegister, getAllContractors,deleteContractor, getContractor ,updateContractor } from '../controllers/contractor-controller.js';

import { addProduct, getAllProducts , getProduct,deleteProduct ,updateProduct, filterProduct} from '../controllers/product-controller.js';
import { addRentalProvider, getAllProductProvider,updateProvider, deleteProvider , getProvider} from '../controllers/rental-provider-controller.js';
import { getConversations, newConversation , getConversation} from '../controllers/conversation-controller.js';
import { newMessage, getMessages } from '../controllers/message-controller.js';
import { addEngineer, deleteEngineer, getEngineer,getAllEngineers, updateEngineer } from '../controllers/engineer-controller.js';
import { addWorkerGroup, deleteGroupWorker, getAllWorkerGroup,getGroupWorker, updateGroupWorker } from '../controllers/workerGroup-controller.js';
import { addProject, deleteProject, getProjects } from '../controllers/project-controller.js';
import { verifyUserToken } from '../middleware/verify-token.js';



const router=express.Router();

router.get("/verifyUser/:key",verifyUser);
router.post("/signup",userSignup);
router.post("/login",userLogin);
router.post("/email",verifyEmail);
router.put("/updatePassword",updatePassword);
router.get("/getUser/:id",getUser);


//worker section
router.post("/worker" ,workerRegister);
router.get("/getAllWorkers",verifyUserToken,getAllWorkers);
router.get("/getWorker/:id",verifyUserToken,getWorker);
router.get("/filterWorker/:id1/:id2/:id3/:id4", filterWorker)
router.put("/updateWorker/:id",updateWorker);
router.delete("/deleteWorker/:id",deleteWorker)



//contractor section
router.post("/contractor",contractorRegister);
router.get("/getAllContractors",verifyUserToken,getAllContractors);
router.put("/updateContractor/:id",updateContractor);
router.delete("/deleteContractor/:id",deleteContractor);
router.get("/getContractor/:id",verifyUserToken,getContractor);


//group worker section 
router.post("/addGroupWorker",addWorkerGroup);
router.get("/getAllGroupWorkers",verifyUserToken,getAllWorkerGroup);
router.put("/updateGroupWorker/:id",updateGroupWorker);
router.delete("/deleteGroupWorker/:id",deleteGroupWorker);
router.get("/getGroupWorker/:id",verifyUserToken,getGroupWorker)




//engineer section 
router.post("/addEngineer",addEngineer);
router.get("/getAllEngineers",verifyUserToken,getAllEngineers);
router.put("/updateEngineer/:id",updateEngineer);
router.delete("/deleteEngineer/:id",deleteEngineer);
router.get("/getEngineer/:id",verifyUserToken,getEngineer);


//Product section
router.post("/addProduct",addProduct);
router.get("/getProducts",verifyUserToken, getAllProducts)
router.get("/getProduct/:id",verifyUserToken,getProduct);
router.put("/updateProduct/:id",updateProduct)
router.get("/filterProduct/:id1/:id2/:id3",filterProduct)
router.delete("/deleteProduct/:id", deleteProduct)




//Rental Provider section
router.post("/registerRentalProvider",addRentalProvider)
router.get("/getAllProductProvider",verifyUserToken,getAllProductProvider)
router.get("/productProvider/:id",verifyUserToken,getProvider);
router.put("/updateProvider/:id",updateProvider);
router.delete("/deleteProvider/:id",deleteProvider)


//message section
router.get("/getConversations/:id",getConversations);
router.post("/newConversation", newConversation);
router.post("/getConversation", getConversation);
router.post("/message/add",newMessage );
router.get("/getMessages/:id",getMessages);


//project section

router.post("/addProject",addProject);
router.get("/getProjects/:id",verifyUserToken, getProjects)
router.delete("/deleteProject/:id",deleteProject);






export default router;