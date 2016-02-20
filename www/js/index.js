/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function initialize() {
    document.addEventListener('deviceready', function() {

        retrieveData("http://joee.com.br/index.html");

    }, false);
}


function retrieveData(url) {
    var request = new XMLHttpRequest();

    request.onload = function() {
        if (request.readyState === 4 && request.status === 200) {
            alert("opa " + request.responseText);
        } else {
            alert("epa " + request.statusText);
        }
    };
    
    request.open("get", url, true);
    request.send();
}
