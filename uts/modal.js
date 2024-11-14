


    // Data untuk setiap modal, termasuk URL gambar
    const modals = [
        { id: "sepatu1", title: 'Modal 1', body: 'Ini adalah konten dari modal 1', imgSrc: 'https://via.placeholder.com/300x200?text=Gambar+1' },
        { id: "sepatu2", title: 'Modal 2', body: 'Ini adalah konten dari modal 2', imgSrc: 'https://via.placeholder.com/300x200?text=Gambar+2' },
        { id: "sepatu3", title: 'Modal 3', body: 'Ini adalah konten dari modal 3', imgSrc: 'https://via.placeholder.com/300x200?text=Gambar+3' }
    ];

    // Memilih container untuk tombol dan modals
    const modalButtonsContainer = document.getElementById('modal-buttons');
    const modalContainer = document.getElementById('modal-container');

    // Looping untuk membuat tombol dan modal
    modals.forEach(modal => {
        // Membuat tombol untuk membuka modal
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary', 'me-2');
        button.textContent = `Open ${modal.title}`;
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', `#modal${modal.id}`);
        modalButtonsContainer.appendChild(button);

        // Membuat struktur modal dengan gambar
        const modalHTML = `
            <div class="modal fade" id="modal${modal.id}" tabindex="-1" aria-labelledby="modalLabel${modal.id}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalLabel${modal.id}">${modal.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${modal.imgSrc}" alt="Gambar untuk ${modal.title}" class="img-fluid mb-3">
                            ${modal.body}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Menambahkan modal ke dalam container
        modalContainer.insertAdjacentHTML('beforeend', modalHTML);
    });
