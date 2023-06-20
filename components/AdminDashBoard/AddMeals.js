import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { useAuthToken } from "../../contexts/authContext";
import cityApi from "../../utils/Api/city.api";
import useCities from "../../utils/Hooks/useCities";
import MealModal from "../Modal/MealModal";
import Loading from "../Shared/Loading";

function AddMeals() {
  const [displayCM, toggleCM] = useState(false);
  const { cities, isLoading, isFetching } = useCities();
  const token = useAuthToken();
  const queryClient = useQueryClient();
  const { mutate: deleteCityById, isLoading: isLoading2 } = useMutation({
    mutationKey: ["deleteCityById"],
    mutationFn: (id) => {
      return cityApi.deleteCityById(id, token);
    },
    onSuccess: () => {
      toast.success(`City deleted Successfully`);
      queryClient.invalidateQueries(["getAllcities"]);
      refetch();
    },
  });
  const { mutate, isLoading: isLoading3 } = useMutation({
    mutationFn: (data) => cityApi.addNewCity(data, token),
    onSuccess: () => {
      toast.success(`City added successfully`);
      queryClient.invalidateQueries({ queryKey: ["getAllcities"] });
    },
    onError: () => {
      const message = "Something went wrong try again later";
      toast.error(message);
    },
  });

  return (
    <>
      <div className="main-content d-flex flex-column">
        <div className="breadcrumb-area">
          <h1>Add Meals</h1>
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
            <li className="item">Add Meals</li>
          </ol>
        </div>

        {/*..........................city information............................................*/}

        <div className="add-listings-btn">
          <button
            type="submit"
            onClick={() => {
              toggleCM(!displayCM);
            }}
          >
            Add Meals
          </button>
        </div>

        {/*.................................... city List .........................................................*/}
        {isLoading || isLoading2 || isLoading3 || isFetching ? (
          <Loading />
              ) : (
        <>
            
        </>
        
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

      {/*..........................CITY MODAL................................................. */}
      <MealModal displayCM={displayCM} mutate={mutate} toggleCM={toggleCM} />
    </>
  );
}

export default AddMeals;
