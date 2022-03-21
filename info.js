function validateForm() {
    if (document.forms["contact"]["email"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["contact"]["email"].focus();
        return false;
    }
    if (document.forms["contact"]["firstname"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["contact"]["firstname"].focus();
        return false;
    }
    if (document.forms["contact"]["lastname"].value == "") {
        alert("Pilih Jurusan.");
        document.forms["contact"]["lastname"].focus();
        return false;
    }
    if (document.forms["contact"]["message"].value == "") {
        alert("Pilih Jurusan.");
        document.forms["contact"]["message"].focus();
        return false;
    }
    if (document.forms["contact"]["invalidcheck"].checked) {
        alert("Pilih Jurusan.");
        document.forms["contact"]["invalidcheck"].focus();
        return false;
    }
}