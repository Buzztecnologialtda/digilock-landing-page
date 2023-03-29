import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4" id="contact">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div>
          <p>&copy; 2023 Digilock</p>
        </div>
        <div className="flex items-center">
          <div>
            <p className="mb-1">
              {" "}
              <a href="https://wa.me/5511982655301" target={"_blank"}>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
              </a>
              Whatsapp: +55 (11) 98265-5301
            </p>
            <p className="mb-0">
              <a href="comercial@digilock2023.com.br">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              </a>
              Email: comercial@digilock2023.com.br
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
