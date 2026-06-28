import Image from './Image.js'

import { ButtonLink } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import HalaPOSImage from '@/images/HalaPOS.png'

export function Hero() {
  return (
    <div className="overflow-hidden bg-dark-900 dark:-mb-32 dark:-mt-[4.5rem] dark:pb-32 dark:pt-[4.75rem] dark:lg:-mt-[5rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="absolute bottom-full right-full -mr-72 -mb-56 hidden opacity-50 lg:block">
              <Image
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
            </div>
            <div className="relative">
              <p className="inline bg-gradient-to-r from-fuchsia-300 via-primary-400 to-fuchsia-300 bg-clip-text font-display text-4xl tracking-tight text-transparent">
                Easy, Fast &amp; Smart Point of Sale Solution
              </p>
              <p className="mt-3 text-xl tracking-tight text-dark-400">
                A user-friendly interface that&apos;s fast to learn and easy to
                use, minimizing training time. Works seamlessly with your
                existing or new hardware. All your data is synced to the cloud
                and accessible from anywhere.
              </p>
              <div className="mt-8 flex space-x-4 md:justify-center lg:justify-start">
                <ButtonLink
                  target="_blank"
                  href="https://www.halapos.com/#app-pricing"
                >
                  Buy License
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  variant="secondary"
                  href="https://www.halapos.com/#cloud-pricing"
                >
                  Check Cloud Plans
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="relative lg:static">
            <div className="absolute opacity-50 inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-translate-y-[60%]" />
            </div>
            <div className="relative">
              <div className="absolute opacity-25 -right-64 -top-64">
                <Image
                  src={blurCyanImage}
                  alt=""
                  width={530}
                  height={530}
                  unoptimized
                  priority
                />
              </div>
              <div className="absolute opacity-25 -bottom-40 -right-44">
                <Image
                  src={blurIndigoImage}
                  alt=""
                  width={567}
                  height={567}
                  unoptimized
                  priority
                />
              </div>
            </div>
            <div className="w-full text-center relative z-10">
              <Image
                src={HalaPOSImage}
                width={603}
                height={360}
                alt="HalaPOS point of sale dashboard"
                placeholder="blur"
                unoptimized
                className="mx-auto max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
