function hitung(perhitungan) {
    let frm = document.getElementById('calcForm');
    let a1 = parseInt(frm.angka1.value);
    let a2 = parseInt(frm.angka2.value);

    switch(perhitungan){
        case "tambah" :
            if(isNaN(a1) || isNaN(a2)) {
                swal("Harap Masukkan Angka", "...supaya bisa dihitung");
            }    
            else {
                var total = a1 + a2; 
                frm.hasil.value = total; 
            } 
            break;
        case "kurang" :
            if (isNaN(a1) || isNaN(a2)) {
                swal("Harap Masukkan Angka", "...supaya bisa dihitung");
            }    
            else {
                var total = a1 - a2;
                frm.hasil.value = total;  
            } 
            break;
        case "kali" :
            if (isNaN(a1) || isNaN(a2)) {
                swal("Harap Masukkan Angka", "...supaya bisa dihitung");
            }    
            else {
                var total = a1 * a2;
                frm.hasil.value = total;  
            } 
            break;
        case "bagi" :
            if (isNaN(a1) || isNaN(a2)) {
                swal("Harap Masukkan Angka", "...supaya bisa dihitung");
            }    
            else {
                var total = a1 / a2;
                frm.hasil.value = total;  
            } 
            break;
        case "pangkat" :
            if (isNaN(a1) || isNaN(a2)) {
                swal("Harap Masukkan Angka", "...supaya bisa dihitung");
            }    
            else {
                var total = Math.pow(a1,a2);
                frm.hasil.value = total;  
            } 
            break;
    }
}