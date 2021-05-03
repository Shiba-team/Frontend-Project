$(document).ready(function() {
    $('#showActor').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:8888/actor/api',
            type: 'get',
        }).done(function(data) {
            for (let a of data) {
                const actor = `
                    <tr>
                    <td>${a.actor_id}</td>
                    <td>${a.first_name}</td>
                    <td>${a.last_name}</td>
                    <td>${a.last_update}</td>
                    </tr>
                    `;
                $('#actor_container').append(actor);
            }
        });
    });

    $('#addActor').on('submit', function(e) {
        e.preventDefault();
        const data = {
            first_name: $('#fname').val(),
            last_name: $('#lname').val()
        }
        const jsonToPost = JSON.stringify(data);
        $.ajax({
            url: 'http://localhost:8888/actor/api',
            type: 'post',
            dataType: 'json',
            data: jsonToPost,
            contentType: 'application/json'
        }).done(function(dat) {
            const actor = `
                    <tr>
                    <td>${dat.insertId}</td>
                    <td>${data.first_name}</td>
                    <td>${data.last_name}</td>
                    <td>${dat.last_update}</td>
                    </tr>
                    `;
            $('#actor_container').append(actor);
        })
    })

    $('#deleteActor').on('submit', function(e) {
        e.preventDefault();
        const data = {
            actor_id: $('#actor_id').val(),
        }
        const jsonToPost = JSON.stringify(data);
        $.ajax({
            url: 'http://localhost:8888/actor/api',
            type: 'delete',
            dataType: 'json',
            data: jsonToPost,
            contentType: 'application/json'
        }).done(function(dat) {
            console.log(dat);
            $('h1').html('Deleted! Number of affected rows is: ' + dat.affectedRows);
        })
    })

    $('#updateActor').on('submit', function(e) {
        e.preventDefault();
        const data = {
            actor_id: $('#actor_id').val(),
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val()
        }
        const jsonToPost = JSON.stringify(data);
        $.ajax({
            url: 'http://localhost:8888/actor/api',
            type: 'put',
            dataType: 'json',
            data: jsonToPost,
            contentType: 'application/json'
        }).done(function(dat) {
            console.log(dat);
            $('h1').html('Deleted! Number of changed rows is: ' + dat.changedRows);
        })
    })
})