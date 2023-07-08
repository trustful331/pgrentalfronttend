import Link from "next/link";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import roomTypeAPi from "../../utils/Api/roomType.api";

import useRoomTypes from "../../utils/Hooks/useRoomTypes";
import RoomtypeModal from "../Modal/RoomTypeModal";
import Loading from "../Shared/Loading";

const AddRoomType = () => {
  const [displayCTM, toggleCTM] = useState(false);
  const [loading, setLoading] = useState(true);
  const { roomTypes, isLoading } = useRoomTypes();
  const queryClient = useQueryClient();
  const token = useAuthToken();
  const { mutate, isLoading: isLoading3 } = useMutation({
    mutationFn: (data) => roomTypeAPi.addNewRoomType(data, token),
    onSuccess: () => {
      toast.success(`RoomType added successfully`);
      queryClient.invalidateQueries({ queryKey: ["getAllRoomType"] });
    },
    onError: () => {
      const message = "Something Went Wrong try again";
      toast.error(message);
    },
  });

  const { mutate: deleteRoomTypeById, isLoading: isLoading2 } = useMutation({
    mutationKey: ["deleteRoomTypeById"],
    mutationFn: (id) => {
      return roomTypeAPi.deleteRoomTypeById(id, token);
    },
    onSuccess: () => {
      toast.success(`RoomType deleted Successfully`);
      queryClient.invalidateQueries(["getAllRoomType"]);
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    {loading && <Loading/>}
      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>Add Room type</h1>
          <ol className="breadcrumb">
            <li className="item">
              <Link href="/admin">
                <a>Home</a>
              </Link>
            </li>
            <li className="item">
              <Link href="/admin">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className="item">Add Room Type</li>
          </ol>
        </div>

        <div className="add-listings-btn">
          <button
            type="submit"
            onClick={() => {
              toggleCTM(!displayCTM);
            }}
          >
            Add Room Type
          </button>
        </div>

        {isLoading || isLoading2 || isLoading3 ? (
          <Loading />
        ) : (
          <ul className="list-group cityList">
            {roomTypes.map((room) => {
              return (
                <li key={room.id} className="list-group-item d-flex">
                  <p className="p-0 m-0 flex-grow-1">{room.typeOfRoom}</p>

                  {/* <div className="add-listings-btn">
                  <button type="submit" className="btn-success">
                    Edit
                  </button>
                </div> */}

                  <div className="add-listings-btn">
                    <button
                      type="submit"
                      onClick={() => deleteRoomTypeById(room.id)}
                      className="btn-success"
                    >
                      DELETE
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="flex-grow-1"></div>

        <div className="copyrights-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-md-6">
              <p>
                <i className="bx bx-copyright"></i> Indice All rights reserved
              </p>
            </div>

            <div className="col-lg-6 col-sm-6 col-md-6 text-right">
              <p>
                Designed by ❤️{" "}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <RoomtypeModal
        mutate={mutate}
        displayCTM={displayCTM}
        toggleCTM={toggleCTM}
      />
    </>
  );
};

export default AddRoomType;
