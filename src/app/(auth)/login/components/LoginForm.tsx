import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import { Button } from '@/components/ui/button/Button';
import Image from 'next/image';

export default function LoginForm() {
  return (
    <div className='w-[90%] md:max-w-[376px] mx-auto px-2'>
      <div className='flex flex-col items-center pt-14'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='129'
          height='22'
          viewBox='0 0 129 22'
          fill='none'
          className='flex justify-center mb-4'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M37.6865 20.4874V15.9677L39.3104 14.1815L43.0722 20.4874H47.6731L42.3415 11.6645L47.7002 5.71048H42.6934L37.6865 11.0421V0H33.627V20.4874H37.6865ZM54.0602 20.8118C55.9005 20.8118 57.38 20.2434 58.4987 19.1067V20.487H62.2876V10.744C62.2876 9.67948 62.0215 8.74577 61.4892 7.94288C60.957 7.13998 60.2127 6.513 59.2565 6.06194C58.3002 5.61088 57.1996 5.38534 55.9547 5.38534C54.385 5.38534 53.0092 5.74619 51.8274 6.4679C50.6456 7.1896 49.8382 8.1639 49.4052 9.3908L52.6529 10.9334C52.9055 10.2839 53.3069 9.76067 53.8572 9.36373C54.4075 8.9668 55.0435 8.76833 55.7652 8.76833C56.523 8.76833 57.1229 8.95777 57.565 9.33667C58.007 9.71556 58.228 10.1847 58.228 10.744V11.1499L54.1414 11.7995C52.3732 12.0882 51.0561 12.6385 50.1901 13.4504C49.324 14.2623 48.891 15.2907 48.891 16.5357C48.891 17.8708 49.3556 18.9173 50.2848 19.6751C51.214 20.4329 52.4724 20.8118 54.0602 20.8118ZM53.6001 17.4565C53.9429 17.7091 54.3669 17.8354 54.8721 17.8354C55.8825 17.8354 56.6944 17.5196 57.3078 16.8882C57.9213 16.2567 58.228 15.4899 58.228 14.5877V14.1276L54.8721 14.723C54.2947 14.8313 53.8527 15.0162 53.5459 15.2779C53.2392 15.5395 53.0859 15.9139 53.0859 16.401C53.0859 16.8521 53.2573 17.2039 53.6001 17.4565ZM69.3241 20.487V11.8536C69.3241 11.0056 69.5767 10.3245 70.0819 9.81029C70.587 9.29607 71.2366 9.03897 72.0305 9.03897C72.8243 9.03897 73.4739 9.29607 73.9791 9.81029C74.4842 10.3245 74.7368 11.0056 74.7368 11.8536V20.487H78.7964V10.9876C78.7964 9.86893 78.5619 8.89011 78.0928 8.05114C77.6237 7.21215 76.9696 6.55811 76.1306 6.089C75.2916 5.6199 74.3128 5.38534 73.1942 5.38534C72.256 5.38534 71.426 5.56126 70.7043 5.91309C69.9826 6.26492 69.4323 6.80169 69.0534 7.52339V5.71011H65.2645V20.487H69.3241ZM93.6274 19.7837C92.4907 20.4694 91.2007 20.8122 89.7573 20.8122C88.8552 20.8122 88.0117 20.6633 87.2268 20.3656C86.442 20.0679 85.7879 19.6394 85.2647 19.0801V20.4874H81.4757V4.22177e-05H85.5353V6.95546C86.5818 5.90899 87.9981 5.38575 89.7844 5.38575C91.1917 5.38575 92.4637 5.72856 93.6004 6.41418C94.737 7.0998 95.6392 8.02448 96.3068 9.18823C96.9743 10.352 97.3081 11.6556 97.3081 13.099C97.3081 14.5243 96.9788 15.8234 96.3203 16.9962C95.6617 18.1689 94.7641 19.0981 93.6274 19.7837ZM89.2702 17.1586C88.1696 17.1586 87.272 16.7842 86.5774 16.0355C85.8827 15.2867 85.5354 14.3079 85.5354 13.099C85.5354 11.9082 85.8827 10.9339 86.5774 10.1761C87.272 9.41835 88.1696 9.03946 89.2702 9.03946C90.3889 9.03946 91.309 9.42286 92.0308 10.1897C92.7525 10.9565 93.1133 11.9263 93.1133 13.099C93.1133 14.2898 92.7525 15.2641 92.0308 16.0219C91.309 16.7797 90.3889 17.1586 89.2702 17.1586ZM108.702 19.1067C107.583 20.2434 106.104 20.8118 104.264 20.8118C102.676 20.8118 101.417 20.4329 100.488 19.6751C99.5589 18.9173 99.0943 17.8708 99.0943 16.5357C99.0943 15.2907 99.5274 14.2623 100.393 13.4504C101.259 12.6385 102.577 12.0882 104.345 11.7995L108.431 11.1499V10.744C108.431 10.1847 108.21 9.71556 107.768 9.33667C107.326 8.95777 106.726 8.76833 105.969 8.76833C105.247 8.76833 104.611 8.9668 104.061 9.36373C103.51 9.76067 103.109 10.2839 102.856 10.9334L99.6086 9.3908C100.042 8.1639 100.849 7.1896 102.031 6.4679C103.213 5.74619 104.588 5.38534 106.158 5.38534C107.403 5.38534 108.504 5.61088 109.46 6.06194C110.416 6.513 111.16 7.13998 111.693 7.94288C112.225 8.74577 112.491 9.67948 112.491 10.744V20.487H108.702V19.1067ZM105.076 17.8354C104.57 17.8354 104.146 17.7091 103.804 17.4565C103.461 17.2039 103.289 16.8521 103.289 16.401C103.289 15.9139 103.443 15.5395 103.749 15.2779C104.056 15.0162 104.498 14.8313 105.076 14.723L108.431 14.1276V14.5877C108.431 15.4899 108.125 16.2567 107.511 16.8882C106.898 17.5196 106.086 17.8354 105.076 17.8354ZM119.528 11.8536V20.487H115.468V5.71011H119.257V7.52339C119.636 6.80169 120.186 6.26492 120.908 5.91309C121.63 5.56126 122.46 5.38534 123.398 5.38534C124.516 5.38534 125.495 5.6199 126.334 6.089C127.173 6.55811 127.827 7.21215 128.296 8.05114C128.765 8.89011 129 9.86893 129 10.9876V20.487H124.94V11.8536C124.94 11.0056 124.688 10.3245 124.183 9.81029C123.677 9.29607 123.028 9.03897 122.234 9.03897C121.44 9.03897 120.791 9.29607 120.285 9.81029C119.78 10.3245 119.528 11.0056 119.528 11.8536Z'
            fill='black'
          />
          <rect
            y='0.188477'
            width='5.07448'
            height='21.1437'
            rx='2'
            fill='#635FC7'
          />
          <rect
            opacity='0.75'
            x='7.61182'
            y='0.188477'
            width='5.07448'
            height='21.1437'
            rx='2'
            fill='#635FC7'
          />
          <rect
            opacity='0.5'
            x='15.2236'
            y='0.188477'
            width='5.07448'
            height='21.1437'
            rx='2'
            fill='#635FC7'
          />
        </svg>
        <div className='mt-16'>
          <h2 className='text-2xl font-bold text-center'>Welcome back!</h2>
          <p className='text-center text-sm font-medium leading-6'>
            Login with your details
          </p>
        </div>
      </div>

      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='email'
              className='text-sm text-grey-border font-medium leading-6'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='johndoe@demo.com'
              className='w-full border border-grey-border rounded-sm p-2.5 h-10 placeholder:text-foreground placeholder:text-sm'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='password'
              className='text-sm text-grey-border font-medium leading-6'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='John@doe'
              className='w-full border border-grey-border rounded-sm p-2.5 h-10 placeholder:text-foreground placeholder:text-sm'
            />
          </div>
        </div>
        <Button
          variant='default'
          size='default'
          className='text-base font-bold'
        >
          Login
        </Button>
      </form>
      <div className='flex justify-center mt-4'>
        <p className='text-sm text-grey-border font-medium leading-6 '>
          Already have an account?
          <span className='text-primary text-sm font-medium leading-6 ml-1'>
            <Link href=''>Register</Link>
          </span>
        </p>
      </div>
      {/* <div className='h-'>
        <span>Or</span>
      </div> */}
      <div className='flex flex-col gap-4 mt-4'>
        <div>
          <Button variant='destructive' size='default'>
            <Image
              src='/assets/github.svg'
              alt='github'
              width={20}
              height={20}
              style={{ width: 20, height: 20 }}
            />
            Continue with GitHub
          </Button>
        </div>
        <div>
          <Button variant='destructive' size='default'>
            <Image
              src='/assets/google.svg'
              alt='google'
              width={20}
              height={20}
              style={{ width: 20, height: 20 }}
            />
            Continue with Google
          </Button>
        </div>
        <div>
          <Button variant='destructive' size='default'>
            <Image
              src='/assets/apple.svg'
              alt='apple'
              width={20}
              height={20}
              style={{ width: 20, height: 20 }}
            />
            Continue with Apple
          </Button>
        </div>
        <div>
          <Button variant='destructive' size='default'>
            <Image
              src='/assets/user.svg'
              alt='avatar'
              width={20}
              height={20}
              style={{ width: 20, height: 20 }}
            />
            Continue as a Guest
          </Button>
        </div>
      </div>
    </div>
  );
}
