import { useAppContext } from "../context/app-context";

export default function Setting() {
  const [state, dispatch] = useAppContext();
  return (
    <input
      type="text"
      onChange={(e) =>
        dispatch({
          type: "updateUser",
          payload: {
            ...state.user,
            name: e.target.value,
          },
        })
      }
      placeholder="ganti nama"
      value={state.user.name ?? ""}
    />
  );
}

//*line 4 destruction array

//*line 9
//!untuk set data mengunakan context dan redux beda file
//! ... untuk ambil data di user agar yang di ubah hanya name
//! melaui state reducer yang di deklarasi dengna nilai use state di app.js

//*line 17-18
//!kasih value biar menjadi controled component
//!kasih ??'' biar ga eror kalo ga ada data
