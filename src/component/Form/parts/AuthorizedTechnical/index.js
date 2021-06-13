import React, { useState } from "react";

function AuthorizedTechnical({getAuthorizedTechnical}) {
  const [data, setData] = useState({
    nama: "",
    bagian: "",
    jabatan: "",
    telephone: "",
    handphone: "",
    fax: "",
    email: "",
  });

  const changeHandler = (e) => {
    const {name, value} = e.target
    const newData = {
      ...data,
      [name]: value
    }
    setData(newData)
    getAuthorizedTechnical(newData)
  };

  return (
    <>
      <div class="card text-white bg-dark-custom mb-3 card-custom">
        <div class="card-header">Penanggung Jawab Teknis</div>
        <div className="card-body">
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Nama
            </label>
            <input
              onChange={changeHandler}
              required
              type="text"
              class="form-control"
              id="nama-perusahaan"
              name="nama"
              value={data.nama}
            />
          </div>
          <div class="mb-3">
            <label for="nama-perusahaan" class="form-label">
              Bagian
            </label>
            <input
              onChange={changeHandler}
              required
              type="text"
              class="form-control"
              id="nama-perusahaan"
              name="bagian"
              value={data.bagian}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Jabatan
            </label>
            <input
              onChange={changeHandler}
              required
              type="text"
              class="form-control"
              id="jenis-usaha"
              name="jabatan"
              value={data.jabatan}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Telephone
            </label>
            <input
              onChange={changeHandler}
              required
              type="text"
              placeholder="Kode Area / Nomor"
              class="form-control"
              id="jenis-usaha"
              name="telephone"
              value={data.telephone}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Handphone
            </label>
            <input
              onChange={changeHandler}
              required
              type="text"
              class="form-control"
              id="jenis-usaha"
              name="handphone"
              value={data.handphone}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Fax
            </label>
            <input
              onChange={changeHandler}
              required
              type="text"
              placeholder="Kode Area / Nomor"
              class="form-control"
              id="jenis-usaha"
              name="fax"
              value={data.fax}
            />
          </div>
          <div class="mb-3">
            <label for="jenis-usaha" class="form-label">
              Alamat Email
            </label>
            <input
              onChange={changeHandler}
              required
              type="text"
              class="form-control"
              id="jenis-usaha"
              name="email"
              value={data.email}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorizedTechnical;
