let dataprev=null;

// hello
      //fetching current data from database
      async function datafetch(url1){
          try {
              const response = await fetch(url1, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json'
                  },
              });
          
              if (!response.ok) {
                  const errorText = await response.text();
                  throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
              }
              const datathis=await response.json();
              //console.log(datathis);
             console.log("helolo")
               dataprev =datathis["DataOF"];
               updateMemberData(
                dataprev,
      
                "https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdataupdate"
              );
              console.log(dataprev);
              
          }
          catch (error) {
              alert("Cant connect to Database please Reload :)");
          }
      }


    

const button = document.getElementById("reset");
      button.addEventListener("click", reset);
      const butt2=document.getElementById("undo");
      butt2.addEventListener("click", undo);
      async function updateMemberData(newdata, urlu) {
        const url = urlu;
        const payload = {
          filter: {
            _id: { $oid: "6673200056ee987ef2a3fc82" },
          },
          update: {
            $set: {
              DataOF: newdata,
            },
          },
        };

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          alert("data updated");
          location.replace("https://splitapp-ert35jfyq-anjithsajus-projects.vercel.app/");
        } catch (error) {
          console.error("Error:", error);
        }
      }
      function reset() {
        const pass = document.getElementById("password").value;
        if (pass == "yessekke") {
          let Chriswin = {
            pid: 101,
            Anjith: 0,
            Adith: 0,
            Kevin: 0,
           Richol: 0,
            Anadhakrishnan: 0
          };

          let Kevin = {
            pid: 102,
            Anjith: 0,
            Adith: 0,
            Chriswin: 0,
           Richol: 0,
            Anadhakrishnan: 0,
          };
          let Anjith = {
            pid: 103,
            Kevin: 0,
            Adith: 0,
            Chriswin: 0,
           Richol: 0,
            Anadhakrishnan: 0,
          };
          let Adith = {
            pid: 104,
            Anjith: 0,
            Kevin: 0,
            Chriswin: 0,
           Richol: 0,
            Anadhakrishnan: 0,
          };
         let Richol = {
            pid: 106,
            Anjith: 0,
            Adith: 0,
            Chriswin: 0,
            Anadhakrishnan: 0,
            Kevin: 0,
          };
          let Anadhakrishnan = {
            pid: 106,
            Anjith: 0,
            Adith: 0,
            Chriswin: 0,
            Richol: 0,
            Kevin: 0,
          };
          const  expensedetails=
          {
              Total:0,
              Breakfast:0,
              Lunch:0,
              Dinner:0,
              Snacks:0,
              Transport:0,
              Other:0
          }
          const individualdetails=
          {
              Chriswin:0,
              Anjith: 0,
              Adith: 0,
              Kevin: 0,
              Richol: 0,
              Anadhakrishnan: 0
          }
          const data1 = {
            Chriswin,
            Kevin,
            Anjith,
            Anadhakrishnan,
            Adith,
            Richol
          };
          const database1={Tally:data1,
            Expenses:expensedetails,
            IDetails:individualdetails

          };
          //datapush(database1,"https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/memeberdatapush");
          updateMemberData(database1,"https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/test");
          updateMemberData(
            database1,
            "https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdataupdate"
          );
          
          const deleteAllMembers = async () => {
            const url =
              "https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/transactiondelete";

            try {
              const response = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({}), // Empty body
              });

              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
            } catch (error) {
              console.error("Error:", error);
            }
          };

          // Call the function to delete all members
          deleteAllMembers();
         // location.replace("https://anjithsaju.github.io/");
        } else alert("wrong password");
      }
      function undo()
      {
        const pass = document.getElementById("password").value;
        if (pass == "yessekke")
          {
        datafetch("https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/undo");
       
       
      }
    }
      
