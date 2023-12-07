import { useCallback, useContext, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Button, Input } from '../components';
import images from '../assets';

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({
    name: '',
    description: '',
    price: '',
  });

  const onDrop = useCallback(() => {
    // upload image to the ipfs
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5_000_000,
  });

  const fileStyle = useMemo(() => (`
    flex flex-col items-center
    p-5 text-2xl border
    border-nft-gray-2 dark:border-white bg-white dark:bg-nft-black-1
    ${isDragActive && 'border-file-active'} 
    ${isDragAccept && 'border-file-accept'} 
    ${isDragReject && 'border-file-reject'} 
  `), [isDragActive, isDragAccept, isDragReject]);

  console.log(formInput);

  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="w-3/5 md:w-full">
        <h1 className="font-poppins font-semibold text-2xl text-nft-black-1 dark:text-white">Create new item</h1>

        <div className="mt-16">
          <p className="font-poppins font-semibold text-xl text-nft-black-1 dark:text-white">Upload file</p>
          <div className="mt-4">
            <div {...getRootProps()} className={fileStyle}>
              <input {...getInputProps()} />
              <div className="flexCenter flex-col text-center">
                <p className="font-poppins font-semibold text-xl text-nft-black-1 dark:text-white">JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</p>

                <div className="flex justify-center my-12 w-full">
                  <Image
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="file upload"
                    src={images.upload}
                    className="invert dark:invert-0"
                  />
                </div>

                <p className="font-poppins font-semibold text-sm text-nft-black-1 dark:text-white">Drag and Drop File</p>
                <p className="mt-2 font-poppins font-semibold text-sm text-nft-black-1 dark:text-white">Or browse media on your device</p>
              </div>
            </div>

            {fileUrl && (
              <aside>
                <div>
                  <img src={fileUrl} alt="Asset_file" />
                </div>
              </aside>
            )}
          </div>
        </div>

        <Input
          inputType="input"
          title="Name"
          placeholder="Asset Name"
          handleClick={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />

        <Input
          inputType="textarea"
          title="Description"
          placeholder="Asset Description"
          handleClick={(e) => setFormInput({ ...formInput, description: e.target.value })}
        />

        <Input
          inputType="number"
          title="Price"
          placeholder="Asset Price"
          handleClick={(e) => setFormInput({ ...formInput, price: e.target.value })}
        />

        <div className="mt-7 w-full flex justify-end">
          <Button
            btnName="Create Item"
            btnType="primary"
            clsStyles="rounded-xl"
            handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
