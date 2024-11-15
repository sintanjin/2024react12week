import React, { useState } from 'react';
import my_data from "./my_data.json";

export default function ShowList() {
  const [playerList, setPlayerList] = useState([]);
  const newArrayData = my_data.players.map((item) => {
    return(
      
      <li key={item.id}>
        {item.id} {item.uniform_number} {item.country} {item.position} {item.name}
      </li>
    );
  });
  function getDataFromJSONFile(){
            
    setPlayerList(newArrayData);

  };
  function createDataToJSONFile(){
    const uniform = document.getElementById("uniform").value;
    const country = document.getElementById("country").value;
    const position = document.getElementById("position").value;
    const name = document.getElementById("name").value;
    const id = playerList.length+1;


    setPlayerList((prevList) => [
      ...prevList,
      <li key={id}>
         {id} {uniform} {country} {position} {name}
      </li>,
    ]);

    document.getElementById("uniform").value = "";
    document.getElementById("country").value = "";
    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
  }
  function updataDataToJSONFile(){
    const id = parseInt(document.getElementById("player_id").value);
    const uniform = document.getElementById("uniform2").value;
    const country = document.getElementById("country2").value;
    const position = document.getElementById("position2").value;
    const name = document.getElementById("name2").value;
    const updatedList = playerList.map((player) => {
    
      const playerId = parseInt(player.key);
      if (playerId === id) {
        return (
          <li key={id}>
            {id} {uniform || player.props.children[1]} {country || player.props.children[2]} {position || player.props.children[3]} {name || player.props.children[4]}
          </li>
        );
      }
      return player;
    });


    setPlayerList(updatedList);
    document.getElementById("player_id").value = "";
    document.getElementById("uniform2").value = "";
    document.getElementById("country2").value = "";
    document.getElementById("position2").value = "";
    document.getElementById("name2").value = "";
  }
  function deleteDataToJSINFile(){
    const id = parseInt(document.getElementById("delete_id").value);

    const updatedList = playerList.filter((player) => {
      return parseInt(player.key) !== id;
    });
  
    setPlayerList(updatedList);
  
    document.getElementById("delete_id").value = "";     
  }
  return (
    <>
    <div class="container text-left">
        <div class="row">
            <div class="col">
                <button onClick={getDataFromJSONFile}>데이터 목록보기</button>
                <div id="div_players">
                  <ul>{playerList}</ul>
                </div>
                
            </div>
          <div class="col">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              데이터 추가
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <input id="uniform" type="text" placeholder="uniform number"/>
                      <br/>
                      <input id="country" type="text" placeholder="country"/>
                      <br/>
                      <input id="position" type="text" placeholder="position"/>
                      <br/>
                      <input id="name" type="text" placeholder="name"/>
                            
                  </div>
                  <div class="modal-footer">
                    <button onClick={createDataToJSONFile}>추가</button>
                  </div>
                </div>
              </div>
            </div>
            <br/><br/>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              데이터 수정
            </button>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel2">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <input id="player_id" type="text" placeholder="id"/>
                    <br/>
                    <input id="uniform2" type="text" placeholder="uniform number"/>
                    <br/>
                    <input id="country2" type="text" placeholder="country"/>
                    <br/>
                    <input id="position2" type="text" placeholder="position"/>
                    <br/>
                    <input id="name2" type="text" placeholder="name"/>
                  </div>
                  <div class="modal-footer">
                    <button onClick={updataDataToJSONFile}>수정</button>
                  </div>
                </div>
              </div>
            </div>
                
                <br/>
                <br/>
                <input id="delete_id" type="text" placeholder="ID"/>
                <button onClick={deleteDataToJSINFile}>삭제</button>
            </div>
        </div>
            
        
            
    </div>
    </>

  )
}
