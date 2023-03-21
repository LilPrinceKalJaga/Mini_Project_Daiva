import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/solid";

function BackComponent() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <button
      onClick={goBack}
      className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
    >
      
      <span>Back</span>
    </button>
  );
}

export default BackComponent;
