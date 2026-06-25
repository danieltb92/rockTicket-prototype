import svgPaths from "@/imports/ExploreFlow/svg-1jcjc478ov";
import { StatusBar } from "@/shared/components/StatusBar";

export function LoginScreen({
  onLogin,
  onBack,
}: {
  onLogin: (provider: "google" | "facebook") => void;
  onBack: () => void;
}) {
  return (
    <div className="bg-[#090909] flex flex-col h-full relative w-full">
      <div className="relative flex flex-col h-full">
        <StatusBar />

        {/* Back button */}
        <div className="flex items-center px-[24px] py-[16px]">
          <button
            onClick={onBack}
            className="flex items-center justify-center p-[12px] rounded-[6px] cursor-pointer hover:bg-white/10 transition-colors"
          >
            <svg
              className="size-[20px]"
              fill="none"
              viewBox="0 0 13.3333 13.3333"
            >
              <path d={svgPaths.p25894700} fill="white" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-[24px]">
          <div className="flex flex-col items-center gap-[16px] mb-[60px]">
            <p
              className="leading-[1.1] text-[44px] text-white text-center uppercase"
              style={{ fontFamily: "'Squada One', sans-serif" }}
            >
              INICIAR
              <br />
              SESIÓN.
            </p>
            <p
              className="leading-[24px] text-[16px] text-[rgba(255,255,255,0.7)] text-center"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              Elige cómo quieres continuar
            </p>
          </div>

          <div className="flex flex-col gap-[12px] w-full">
            {/* Google */}
            <button
              onClick={() => onLogin("google")}
              className="w-full flex items-center justify-center gap-[12px] py-[16px] rounded-[8px] cursor-pointer transition-colors"
              style={{
                backgroundColor: "white",
                border: "1px solid #dadce0",
              }}
            >
              <svg className="size-[20px]" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <p
                className="leading-[24px] text-[16px] text-[#3c4043]"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 600,
                }}
              >
                Continue with Google
              </p>
            </button>

            {/* Facebook */}
            <button
              onClick={() => onLogin("facebook")}
              className="w-full flex items-center justify-center gap-[12px] py-[16px] rounded-[8px] cursor-pointer transition-colors"
              style={{ backgroundColor: "#1877F2" }}
            >
              <svg className="size-[20px]" fill="white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <p
                className="leading-[24px] text-[16px] text-white"
                style={{
                  fontFamily: "'Source Sans Pro', sans-serif",
                  fontWeight: 600,
                }}
              >
                Continue with Facebook
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
