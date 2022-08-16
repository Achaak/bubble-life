import { ModuleControllerList } from '@bubble/modules';
import { styled } from '@bubble/ui';
import { ItemButton } from '@bubble/ui';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
});

export const IndexContainer: React.FC = () => {
  const [modulesConfig, setModulesConfig] = useState<
    {
      name: string;
      icon: string;
    }[]
  >([]);
  const router = useRouter();

  useEffect(() => {
    const initModulesConfig = async (): Promise<void> => {
      setModulesConfig(await ModuleControllerList());
    };

    initModulesConfig();
  }, []);

  return (
    <Container>
      <ItemButton
        icon="bx:message-detail"
        text="Message"
        onClick={(): void => {
          router.push('/message');
        }}
      />

      {modulesConfig.map((moduleConfig, index) => (
        <ItemButton
          key={index}
          icon={moduleConfig.icon}
          text={moduleConfig.name}
          onClick={(): void => {
            router.push(`/${moduleConfig.name}`);
          }}
        />
      ))}

      <ItemButton
        icon="bx:cog"
        text="Settings"
        onClick={(): void => {
          router.push('/settings');
        }}
      />
    </Container>
  );
};
