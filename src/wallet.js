import { ethers } from "ethers";
import config from "./config";

const currentConfig = config.testnet;
const StudiearnAddress = currentConfig.studiearnAddress;
const StudiearnABI = config.abi.studiearnABI;

let acc = 'wallet_address';

async function connect_wallet() {

    //const IsConnected = "false";
    // const Provider = "";
    // const Signer = "";
    // const Account = "";
    const StudiearnInstance = "";
    const LastBadgeTypeId = "";
  
    if (typeof window.ethereum !== "undefined") {
      try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          //IsConnected = "true";

          //connecting to Ethereum
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          //await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const account = await signer.getAddress();

          //contract 연결
          const studiearnInstance = new ethers.Contract(
            StudiearnAddress,
            StudiearnABI,
            signer
          );

          //StudiearnInstance = studiearnInstance; //연결 contract
          //Account = account;
          console.log("My address= " + account);
          console.log("acc + " + acc);

          
          acc = account;

          // console.log("Contract Address= "+ StudiearnAddress);
          // console.log("StudiearnABI= "+StudiearnABI);
          // console.log("declaration =" + studiearnInstance);

          // ////

          // const lastBadgeTypeId = (
          //   await studiearnInstance.lastBadgeTypeId()
          // ).toString();
          // LastBadgeTypeId = lastBadgeTypeId;

          // for (let i = 1; i <= lastBadgeTypeId; i++) {
          //   let badgeTokens = await studiearnInstance.badgeTokens(i);

          //   const newOption = document.createElement("option");
          //   newOption.value = i; // 인덱스 번호
          //   newOption.textContent = badgeTokens[0]; // 메달 이름

          //   document.getElementsByTagName("select")[0].appendChild(newOption);

          //   const medalIndex = document.createElement("div");
          //   const medalUrl = document.createElement("div");

          //   medalIndex.textContent = badgeTokens[0];
          //   medalUrl.textContent = badgeTokens[1];

          //   getElem("medal_index").appendChild(medalIndex);
          //   getElem("medal_url").appendChild(medalUrl);
          // }

        } catch (e) {
          console.log(e);
        }
      } else {
    };
    
    // async function disconnect() {
    //   IsConnected = "false";
    // }
    // // AddBadgeType
    // const [text1, setText1] = useState("");
    // const [text2, setText2] = useState("");

    // const onChange = (e) => {
    //   setText1(e.target.value);
    // };
    // const onChange2 = (e) => {
    //   setText2(e.target.value);
    // };

    // const onCreate = async (e) => {
    //   await studiearnInstance.addBadgeType(text1, text2);
    // };

    // // Award

    // const numberRef = useRef();
    // const usernameRef = useRef();
    // const number2Ref = useRef();
    // const username2Ref = useRef();
    // const number3Ref = useRef();
    // const username3Ref = useRef();
    // const number4Ref = useRef();
    // const username4Ref = useRef();
    // const [ssid, setSsid] = useState("");

    // const onChange__2 = (e) => {
    //   e.preventDefault();
    //   let ssid = {
    //     id: Date.now(),
    //     number: numberRef.current.value,
    //     username: usernameRef.current.value,
    //     number2: number2Ref.current.value,
    //     username2: username2Ref.current.value,
    //     number3: number3Ref.current.value,
    //     username3: username3Ref.current.value,
    //     number4: number4Ref.current.value,
    //     username4: username4Ref.current.value,
    //   };
    //   setSsid(ssid);
    // };

    // const [medal, setMedal] = useState(0);

    // const onClick__2 = async () => {
    //   let arr = []; //
    //   let sid, sid2, sid3, sid4; // array.push 로 이용
    //   // number 혹은 username 중 하나라도 빌 때 skip
    //   if (ssid["number"] === "" || ssid["username"] === "") {
    //     getElem(
    //       "awardAlertMessage"
    //     ).innerHTML = `주민번호와 아이디를 모두 입력해주세요.`;
    //   } else {
    //     sid = await studiearnInstance.hash(ssid["number"], ssid["username"]);
    //     arr.push(sid);
    //   }

    //   if (ssid["number2"] === "" || ssid["username2"] === "") {
    //     getElem(
    //       "awardAlertMessage"
    //     ).innerHTML = `주민번호와 아이디를 모두 입력해주세요.`;
    //   } else {
    //     sid2 = await studiearnInstance.hash(ssid["number2"], ssid["username2"]);
    //     arr.push(sid2);
    //   }

    //   if (ssid["number3"] === "" || ssid["username3"] === "") {
    //     getElem(
    //       "awardAlertMessage"
    //     ).innerHTML = `주민번호와 아이디를 모두 입력해주세요.`;
    //   } else {
    //     sid3 = await studiearnInstance.hash(ssid["number3"], ssid["username3"]);
    //     arr.push(sid3);
    //   }

    //   if (ssid["number4"] === "" || ssid["username4"] === "") {
    //     getElem(
    //       "awardAlertMessage"
    //     ).innerHTML = `주민번호와 아이디를 모두 입력해주세요.`;
    //   } else {
    //     sid4 = await studiearnInstance.hash(ssid["number4"], ssid["username4"]);
    //     arr.push(sid4);
    //   }

    //   const undefinedHash =
    //     "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
    //   let new_arr = arr.filter((item) => item !== undefinedHash);
    //   console.log(new_arr);
    //   console.log('badge type id is ', medal);
    //   // arr의 length가 1 이상일 때만 실행
    //   if (new_arr.length > 0) {
    //     try {
    //       let tx = await studiearnInstance.addAwards(medal, new_arr);
    //       getElem("awardMessage").innerHTML =
    //         "waiting for award tx confirmation ...";
    //       await tx.wait();
    //       console.log(tx);
    //       getElem("awardMessage").innerHTML = `awarded.`;
    //     } catch (err) {
    //       getElem("awardMessage").innerHTML = `awarding failed`;
    //     }
    //   }
    // };

    // const number5Ref = useRef();
    // const username5Ref = useRef();
    // const addrRef = useRef();
    // const [ccid, setCcid] = useState("");

    // const onChange__3 = (e) => {
    //   e.preventDefault();
    //   let ccid = {
    //     id: Date.now(),
    //     number5: number5Ref.current.value || "",
    //     username5: username5Ref.current.value || "",
    //   };
    //   setCcid(ccid);
    // };

    // const onClick__3 = async () => {
    //   // number 5나 username5가 공란일 경우 alert 처리
    //   if (ccid["number5"] === "") {
    //     alert("주민번호를 입력해주세요");
    //   } else if (ccid["username5"] === "") {
    //     alert("아이디를 입력해주세요");
    //   } else {
    //     try {
    //       let cid = await studiearnInstance.hash(
    //         ccid["number5"],
    //         ccid["username5"]
    //       );
    //       let address = addrRef.current.value;
    //       let claim = await studiearnInstance.claim(cid, address);
    //       getElem("claimMessage").innerHTML =
    //         "waiting for mint tx confirmation ...";
    //       await claim.wait();
    //       console.log(claim);
    //       getElem("claimMessage").innerHTML = `minted.`;
    //     } catch (err) {
    //       getElem("claimMessage").innerHTML = `minting failed`;
    //     }
    //   }
    // };
    // return (
    //   <>
    //     <div className={styles.toptitle}>
    //       {isConnected ? (
    //         <button className={styles.submit} onClick={() => disconnect()}>
    //           Disconnect
    //         </button>
    //       ) : (
    //         <button className={styles.submit} onClick={() => connect()}>
    //           Connect
    //         </button>
    //       )}
    //       <h3 id="adminaddr" className={styles.second}></h3>
    //     </div>
    //     <div>
    //       <div className={styles.badgetype}>
    //         <h2>Add Badge Type</h2>

    //         <br />
    //         <div className={styles.box}>
    //           <div className={styles.coll}>
    //             <div className={styles.name}>
    //               <span>Badge Name </span>
    //               <span className={styles.even}>Badge URL </span>
    //             </div>
    //             <div className={styles.name}>
    //               <input
    //                 onChange={onChange}
    //                 className={styles.input}
    //                 type="text"
    //                 value={text1}
    //               />
    //               <div className={styles.even}>
    //                 <input
    //                   onChange={onChange2}
    //                   className={styles.input}
    //                   type="text"
    //                   value={text2}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           <button className={styles.submit1} onClick={onCreate}>
    //             등록
    //           </button>
    //         </div>
    //       </div>

    //       <div className={styles.list}>
    //         <div className={styles.badge__2}>
    //           <h3>기존 Badge</h3>
    //           <h3>URL</h3>
    //         </div>
    //         <div className={styles.badge}>
    //           <div className={styles.badge__3} id="medal_index"></div>
    //           <div className={styles.badge__4} id="medal_url"></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div className={styles.badgetype}>
    //         <h2>Award</h2>
    //         <br />
    //         <div className={styles.box__2}>
    //           <div className={styles.coll__2}>
    //             <div className={styles.name__3}>
    //               <span>Badge Type </span>
    //               <select
    //                 className={styles.select}
    //                 name="theme"
    //                 onChange={(e) => {
    //                   const selected = e.target.value;
    //                   setMedal(selected);
    //                 }}
    //               ></select>
    //             </div>
    //             <div className={styles.name__2}>
    //               <span className={styles.even}>인적사항 </span>

    //               <div className={styles.even}>
    //                 <div className={styles.sid}>
    //                   <input
    //                     className={styles.input}
    //                     type="text"
    //                     ref={numberRef}
    //                     placeholder="주민번호 7자리"
    //                     onChange={onChange__2}
    //                   />
    //                   <input
    //                     className={styles.input}
    //                     type="text"
    //                     ref={usernameRef}
    //                     placeholder="아이디"
    //                     onChange={onChange__2}
    //                   />
    //                 </div>
    //                 <div className={styles.sid}>
    //                   <input
    //                     className={styles.input}
    //                     type="text"
    //                     ref={number2Ref}
    //                     placeholder="주민번호 7자리"
    //                     onChange={onChange__2}
    //                   />
    //                   <input
    //                     className={styles.input}
    //                     type="text"
    //                     ref={username2Ref}
    //                     placeholder="아이디"
    //                     onChange={onChange__2}
    //                   />
    //                 </div>
    //                 <div className={styles.sid}>
    //                   <input
    //                     className={styles.input}
    //                     type="text"
    //                     ref={number3Ref}
    //                     placeholder="주민번호 7자리"
    //                     onChange={onChange__2}
    //                   />
    //                   <input
    //                     className={styles.input}
    //                     type="text"
    //                     ref={username3Ref}
    //                     placeholder="아이디"
    //                     onChange={onChange__2}
    //                   />
    //                 </div>
    //                 <div className={styles.sid}>
    //                   <input
    //                     className={styles.input}
    //                     type="text"
    //                     ref={number4Ref}
    //                     placeholder="주민번호 7자리"
    //                     onChange={onChange__2}
    //                   />
    //                   <input
    //                     className={styles.input}
    //                     type="text"
    //                     ref={username4Ref}
    //                     placeholder="아이디"
    //                     onChange={onChange__2}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <button className={styles.submit1} onClick={onClick__2}>
    //             발급
    //           </button>
    //           <div id="awardAlertMessage"></div>
    //           <div id="awardMessage"></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div className={styles.badgetype}>
    //         <h2>Claim</h2>

    //         <br />
    //         <div className={styles.box}>
    //           <div className={styles.coll}>
    //             <div className={styles.name}>
    //               <span>인적사항 </span>
    //               <span className={styles.even}>사용자 주소 </span>
    //             </div>
    //             <div className={styles.name}>
    //               <div className={styles.sid}>
    //                 <input
    //                   className={styles.input}
    //                   type="text"
    //                   ref={number5Ref}
    //                   placeholder="주민번호 7자리"
    //                   onChange={onChange__3}
    //                 />
    //                 <input
    //                   className={styles.input}
    //                   type="text"
    //                   ref={username5Ref}
    //                   placeholder="아이디"
    //                   onChange={onChange__3}
    //                 />
    //               </div>
    //               <div className={styles.even}>
    //                 <input
    //                   className={styles.input2}
    //                   type="text"
    //                   ref={addrRef}
    //                   placeholder="주소"
    //                   onChange={onChange__3}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           <button className={styles.submit1} onClick={onClick__3}>
    //             Mint
    //           </button>
    //           <div id="claimMessage"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </>
    // );
};

export {acc, connect_wallet};


//export default Studiearn;
