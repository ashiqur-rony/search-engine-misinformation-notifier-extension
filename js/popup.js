// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var incognito;
var url;
document.addEventListener( 'DOMContentLoaded', function () {
    document.getElementById( 'privacy-advice' ).innerHTML = 'This extension reads the web page for ' +
        'misinformation trigger keywords and sends to an AI model for further analysis. ' +
        'This extension does not in any way collect any personal or identifiable data. ' +
        'Please disable the extension if you do not agree to that.';
    //console.log(chrome);
} );
